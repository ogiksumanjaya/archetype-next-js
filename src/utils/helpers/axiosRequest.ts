/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

export const InternalError = {
  meta: {
    error: true,
    msg: 'Internal error during request',
  },
}

export const onFirstRequest = (config: AxiosRequestConfig) => {
  config.headers = {
    // const token = GetCookie('token');
    'Content-type': 'application/json; charset=UTF-8',
    // Authorization: `Bearer ${token}`,
  }
  return config
}
export const onFulfilledRequest = (response: AxiosResponse) => response
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const onRejectedResponse = (_error: any): any => Promise.reject(InternalError)

const { NEXT_PUBLIC_BASE_URL_API } = process.env
export const publicRequest = axios.create({
  baseURL: `${NEXT_PUBLIC_BASE_URL_API}`,
})

publicRequest.interceptors.request.use(onFirstRequest, onRejectedResponse)
publicRequest.interceptors.response.use(onFulfilledRequest, onRejectedResponse)
