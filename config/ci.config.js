/* eslint-disable */
import childProcess from 'child_process';
const yargs = require('yargs')
const pkg = require('../package.json')

// 可以执行脚步时指定构建用户：npm run build:weapp:upload -- --user={zsf}
const CIPluginFn = async () => {
  console.log("pengguolong", yargs.argv)
  const { verCode, verName } = yargs.argv
  /**
   * @typedef { import("@tarojs/plugin-mini-ci").CIOptions } CIOptions
   * @type {CIOptions}
   */
  const userName = childProcess.execSync('git config user.name', { encoding: 'utf-8' });
  const branch = childProcess.execSync('git branch --show-current', { encoding: 'utf-8' });
  const commitID = childProcess.execSync('git rev-parse --short HEAD', { encoding: 'utf-8' });
  const commitMessage = childProcess.execSync('git log -1 --pretty=format:"%s"', { encoding: 'utf-8' });
  const version = verCode || pkg.taroConfig.version;
  // let desc = pkg.taroConfig.desc;
  let desc = commitMessage;
  desc = userName ? `${desc} branch：${branch} commitId：${commitID} 发布人：${userName}` : `$${desc} ${branch}: ${commitID}`;

  return {
    weapp: {
      appid: 'wxb280c9a740f9c9b2',
      privateKeyPath: 'config/upload/private.wxb280c9a740f9c9b2.key',
      ignores: ['node_modules/**/*']
    },
    tt: {
      email: '字节小程序邮箱',
      password: '字节小程序密码',
    },
    alipay: {
      appid: '支付宝小程序appid',
      toolId: '工具id',
      privateKeyPath: '密钥文件相对项目根目录的相对路径，例如 key/pkcs8-private-pem',
    },
    dd: {
      appid: '钉钉小程序appid,即钉钉开放平台后台应用管理的 MiniAppId 选项',
      token: '令牌，从钉钉后台获取',
    },
    swan: {
      token: '鉴权需要的token令牌',
    },
    version,
    desc,
  }
}

module.exports = CIPluginFn;
