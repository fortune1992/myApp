/* eslint-disable */
const fse = require("fs-extra");
const FormData = require("form-data");
const axios = require("axios");

const getCardBody = (imageKey, data) => {
  const desc = data.desc.replace(/\n/g, "")
  const index = desc.indexOf('branch');
  return {
    elements: [
      {
        alt: {
          content: "",
          tag: "plain_text"
        },
        img_key: imageKey,
        tag: "img"
      },
      {
        fields: [
          {
            is_short: true,
            text: {
              content: `描述：${desc.substring(0, index)} \n${desc.substring(index).replace(/ /g, "\n")}}`,
              tag: 'lark_md',
            },
          }
        ],
        tag: 'div',
      },
    ],
    header: {
      template: "blue",
      title: {
        content: `万能水印宝-${data.version}打包通知`,
        tag: "plain_text"
      }
    }
  };
};

const getToken = () => {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify({
      app_id: "cli_a4be404fc43b900e",
      app_secret: "dhoNczfh83aLf9DukTAchcjtZN7xgqUz",
    });

    const config = {
      method: "POST",
      url:
        "https://open.feishu.cn/open-apis/auth/v3/tenant_access_token/internal",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log('token', response.data);
        resolve(response.data.tenant_access_token);
      })
      .catch(function (error) {
        reject(error);
      });
  });
};

const uploadImage = (filePath, token) => {
  return new Promise((resolve, reject) => {
    const data = new FormData();
    data.append("image_type", "message");
    data.append("image", fse.createReadStream(filePath));
    const config = {
      method: "post",
      url: "https://open.feishu.cn/open-apis/im/v1/images",
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
        ...data.getHeaders(),
      },
      data: data,
    };


    axios(config)
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        reject(error);
      });
  });
};

const sendFeiShuMessage = (imageKey, data) => {
  const config = {
    method: "post",
    url: "https://open.feishu.cn/open-apis/bot/v2/hook/ee094422-9d26-4d3c-b614-930d4d4108ff",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify({
      msg_type: 'interactive',
      card: JSON.stringify(getCardBody(imageKey, data))
    }),
  };

  axios(config)
    .then(function (response) {
      console.log('send', response);
    })
    .catch(function (error) {
      console.log('error', error);
    });
}

module.exports = function (ctx) {
  ctx.register({
    name: 'onPreviewComplete',
    fn: ({ success, data, error }) => {
      console.log('接收预览后数据(开发版)', success, data, error)
      // 可以在这里发送钉钉或者飞书消息
    },
  });

  ctx.register({
    name: 'onUploadComplete',
    fn: async ({ success, data, error }) => {
      console.log('接收上传后数据(开发版)', success, data, error)

      // 可以在这里发送钉钉或者飞书消息
      uploadImage(data.qrCodeLocalPath, await getToken())
        .then(res => {
          sendFeiShuMessage(res.data.image_key, data);
        })
        .catch(e => {
          console.log('error', e);
        })
    },
  });
}
