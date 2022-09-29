/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/naming-convention */
import axios, { AxiosError, AxiosRequestConfig } from 'axios'

const { NEXT_PUBLIC_BASE_URL_API } = process.env
export const request = axios.create({ baseURL: NEXT_PUBLIC_BASE_URL_API })

// Add a request interceptor
request.interceptors.request.use(
  async (config: AxiosRequestConfig) => {
    try {
      // const token = GetCookie('token');
      config.headers = {
        'Content-type': 'application/json; charset=UTF-8',
        // Authorization: `Bearer ${token}`,
      }
      return config
    } catch (errorConfig) {
      return Promise.reject(errorConfig)
    }
  },
  (error) => Promise.reject(error),
)

// Add a response interceptor
request.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response
  },
  async (error: AxiosError) => {
    const status = error.response?.status
    try {
      if (status === 500) {
        window.location.href = '/500'
      }
      return Promise.reject(error)
    } catch (errorValue) {
      return Promise.reject(errorValue)
    }
  },
)
