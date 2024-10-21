import axios, {
  AxiosInstance,
  AxiosError,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
  AxiosResponse,
} from 'axios'
import { AxiosCanceler } from './helper/axiosCancel'

export interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
  loading?: boolean
  cancel?: boolean
}

const config = {
  // 默认地址请求地址，可在 .env.** 文件中修改
  baseURL: '/',
  // 设置超时时间
  timeout: 30000,
  // 跨域时候允许携带凭证
  withCredentials: true,
}

const axiosCanceler = new AxiosCanceler()
