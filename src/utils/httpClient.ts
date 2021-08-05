import axios, { AxiosError } from 'axios';
import { RequestFunctionParams } from 'yapi-to-typescript';
import { Notify, Toast } from 'vant';

type IRes = {code: number; data: any; msg: string;};
const axiosInstance = axios.create({
  // headers: {
  //   token: getToken(),
  // },
});
axiosInstance.interceptors.request.use((config) => config);

axiosInstance.interceptors.response.use((response) => {
  const res: IRes = response.data;
  switch (res.code) {
    case 0: // 成功
      return res.data;
    case 1001:// 登录失效
    case 2000: // token 为空
    case 2001: // 未登录
      window.location.href = '/#/user/login';
      break;
    default:
      Toast.fail(res.msg || '抱歉，服务出错了！');
  }
  return res.data || undefined;
}, (error: AxiosError) => {
  Notify({ type: 'danger', message: `${error.response?.status} 服务出错了，请稍后重试` });
});

export interface RequestOptions {
}

export default function HttpClient<T>(
  payload: RequestFunctionParams,
  opt?:RequestOptions,
):Promise<T> {
  const baseURL = import.meta.env.VITE_MOCK === 'true' ? `${payload.mockUrl}/` : '/';
  return axiosInstance.request({
    url: payload.path,
    method: payload.method || 'post',
    baseURL,
    headers: payload.requestHeaders,
    data: payload.data,
    ...opt,
  });
}
