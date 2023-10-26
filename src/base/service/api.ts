import Taro from '@tarojs/taro';
import { Logger } from '@/base/logger/Logger';
import { isProductionEnv } from '@/util/Enviroment';

const BASE_URL = "xxx";

// Taro.addInterceptor(Taro.interceptors.logInterceptor);
// Taro.addInterceptor(Taro.interceptors.timeoutInterceptor);

// const interceptor = function (chain) {
//   const requestParams = chain.requestParams
//   const { url } = requestParams
//   console.log("pengguolong", chain.requestParams)
//   // chain.requestParams.header['Follow-Redirect'] = 'false';
//
//   return chain.proceed(requestParams)
//     .then(res => {
//       console.log(`http <-- ${url} result:`, res)
//       return res
//     })
// }
//
// // 2. 添加拦截器
// Taro.addInterceptor(interceptor);

type RequestOpts = Omit<Taro.request.Option, 'url'>;

const safeRequest = (url: string, options: RequestOpts) => {
  return new Promise((resolve, reject) => {
    Taro.request({
      method: 'GET',
      ...options,
      header: {
        ...options?.header,
      },
      url: url.indexOf("http") !== -1 ? url : BASE_URL + url,
    }).then(
      response => {
        resolve(response?.data ?? response);
      },
      err => {
        if (isProductionEnv()) {
          Logger.error(`request error, request url: ${url} options: ${options} error msg: ${err}` );
        }
        reject(err);
      },
    );
  });
};

const get = async (url: string, opts: RequestOpts): Promise<any> => {
  return safeRequest(url, opts);
};

const post = async (url: string, opts: RequestOpts): Promise<any> => {
  return safeRequest(url, {
    ...opts,
    method: 'POST',
  });
};

const put = async (url: string, opts: RequestOpts): Promise<any> => {
  return safeRequest(url, {
    ...opts,
    method: 'PUT',
  });
};

export default {
  get,
  post,
  put,
};