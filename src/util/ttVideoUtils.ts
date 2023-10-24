import md5 from './md5';
import api from '@/base/service/api';
import Taro from '@tarojs/taro';

export async function getNoWatermarkVideoUrl(shareLink: string) {
  if (!shareLink) {
    Taro.showToast({ title: '请输入视频链接！', icon: 'none' })
    return "";
  }
  shareLink.replace(/复制此链接，打开(.*?)，直接观看视频！/g, "");
  let c = shareLink.lastIndexOf("http://");
  c = (c === -1) ? shareLink.lastIndexOf("https://") : c;
  if (c === -1) {
    Taro.showToast({ title: '视频链接不合法，请换一个吧。' })
    return "";
  } else {
    shareLink = shareLink.substring(c);
    if (/.*[\u4e00-\u9fa5]+.*$/.test(shareLink)) {
      shareLink = shareLink.split(' ')[0];
    }
    let r = generateRandom().toString()
    const parseTempStr = shareLink + '@&^' + r
    let s = md5(parseTempStr)
    const requestUrl = "https://3g.gljlw.com/diy/ttxs_dy_2022.php" +
      "?url=" + encodeURIComponent(shareLink) +
      "&r=" + r +
      "&s=" + s
    try {
      const res = await api.get(requestUrl, {
        header: {
          authority: '3g.gljlw.com',
          accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
          'accept-language': 'zh-CN,zh;q=0.9',
          cookie: 'security_session_verify=2e7066356de516073db6914991a7f82c',
          referer: 'https://3g.gljlw.com/diy/douyin.php',
          'upgrade-insecure-requests': '1',
        }
      })
      console.log(res)
      const pattern = />((?:.(?!>))+)<\/textarea>/i;
      const match = res.match(pattern);
      if (match?.length > 1) {
        return match[1] + ".mp4"
      } else {
        const tipsPattern = /<div class="tip">(.*)<b>(.+)<\/b>/i;
        const matchTips = res.match(tipsPattern);
        if (matchTips?.length > 2) {
          console.log(matchTips[2])
          Taro.showToast({ title: matchTips[2], icon: 'none' })
        } else {
          Taro.showToast({ title: '网络请求异常，请稍后重试。', icon: 'none' })
        }
      }
    } catch (e) {
      Taro.showToast({ title: '网络请求异常，请稍后重试。', icon: 'none' })
    }
    return ""
  }
}

function generateRandom() {
  return Math.random().toString(10).substring(2)
}