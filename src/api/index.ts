/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

// @ts-ignore
// prettier-ignore
import { Method, RequestBodyType, ResponseBodyType, RequestConfig, RequestFunctionRestArgs, FileData, prepare } from 'yapi-to-typescript'
// @ts-ignore
import request from '../utils/httpClient'

type UserRequestRestArgs = RequestFunctionRestArgs<typeof request>

// Request: 目前 React Hooks 功能有用到
export type Request<
  TReqeustData,
  TRequestConfig extends RequestConfig,
  TRequestResult,
> = (TRequestConfig['requestDataOptional'] extends true
  ? (requestData?: TReqeustData, ...args: RequestFunctionRestArgs<typeof request>) => TRequestResult
  : (requestData: TReqeustData, ...args: RequestFunctionRestArgs<typeof request>) => TRequestResult) & {
  requestConfig: TRequestConfig
}

const mockUrl_0_0_0_0 = 'http://yapi.smart-xwork.cn/mock/78604' as any
const devUrl_0_0_0_0 = '' as any
const prodUrl_0_0_0_0 = '' as any
const dataKey_0_0_0_0 = 'data' as any

/**
 * 接口 [VR列表↗](http://yapi.smart-xwork.cn/project/78604/interface/api/1174612) 的 **请求类型**
 *
 * @分类 [公共分类↗](http://yapi.smart-xwork.cn/project/78604/interface/api/cat_265757)
 * @请求头 `POST /bi/vr/list`
 * @更新时间 `2021-07-13 23:18:25`
 */
export interface IPostVrListRequest {
  /**
   * 工程id
   */
  plantId?: number
}

/**
 * 接口 [VR列表↗](http://yapi.smart-xwork.cn/project/78604/interface/api/1174612) 的 **返回类型**
 *
 * @分类 [公共分类↗](http://yapi.smart-xwork.cn/project/78604/interface/api/cat_265757)
 * @请求头 `POST /bi/vr/list`
 * @更新时间 `2021-07-13 23:18:25`
 */
export type IPostVrListResponse = {
  id: number
  /**
   * VR 名字
   */
  name: string
  /**
   * URL地址
   */
  url: string
  /**
   * 排序
   */
  sort: number
  plantId: number
  /**
   * 缩略图
   */
  thumbnail: string
}[]

/**
 * 接口 [VR列表↗](http://yapi.smart-xwork.cn/project/78604/interface/api/1174612) 的 **请求配置的类型**
 *
 * @分类 [公共分类↗](http://yapi.smart-xwork.cn/project/78604/interface/api/cat_265757)
 * @请求头 `POST /bi/vr/list`
 * @更新时间 `2021-07-13 23:18:25`
 */
type PostVrListRequestConfig = Readonly<
  RequestConfig<'http://yapi.smart-xwork.cn/mock/78604', '', '', '/bi/vr/list', 'data', string, string, false>
>

/**
 * 接口 [VR列表↗](http://yapi.smart-xwork.cn/project/78604/interface/api/1174612) 的 **请求配置**
 *
 * @分类 [公共分类↗](http://yapi.smart-xwork.cn/project/78604/interface/api/cat_265757)
 * @请求头 `POST /bi/vr/list`
 * @更新时间 `2021-07-13 23:18:25`
 */
const postVrListRequestConfig: PostVrListRequestConfig = {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/bi/vr/list',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postVrList',
}

/**
 * 接口 [VR列表↗](http://yapi.smart-xwork.cn/project/78604/interface/api/1174612) 的 **请求函数**
 *
 * @分类 [公共分类↗](http://yapi.smart-xwork.cn/project/78604/interface/api/cat_265757)
 * @请求头 `POST /bi/vr/list`
 * @更新时间 `2021-07-13 23:18:25`
 */
export const postVrList = (requestData: IPostVrListRequest, ...args: UserRequestRestArgs) => {
  return request<IPostVrListResponse>(prepare(postVrListRequestConfig, requestData), ...args)
}

postVrList.requestConfig = postVrListRequestConfig

/* prettier-ignore-end */
