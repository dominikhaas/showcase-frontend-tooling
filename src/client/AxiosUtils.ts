/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios'
import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface ClientRequest<T> {
  promise: Promise<T>
  cancel: () => void
}

/**
 * Convenience function for performAxiosRequest using axios.post.
 */
export function axiosPOST<T = unknown>(
  url: string,
  requestBody?: any,
  responseBodyMapper: (response: any) => any = (response) => response,
  config?: AxiosRequestConfig,
): ClientRequest<T> {
  return performAxiosRequest<T>(axios.post, url, requestBody, responseBodyMapper, config)
}

/**
 * Convenience function for performAxiosRequest using axios.get.
 */
export function axiosGET<T = unknown>(
  url: string,
  responseBodyMapper: (response: any) => any = (response) => response,
  config?: AxiosRequestConfig,
): ClientRequest<T> {
  return performAxiosRequest<T>(axios.get, url, undefined, responseBodyMapper, config)
}

/**
 * Convenience function for performAxiosRequest using axios.put.
 */
export function axiosPUT<T = unknown>(
  url: string,
  requestBody?: any,
  responseBodyMapper: (response: any) => any = (response) => response,
  config?: AxiosRequestConfig,
): ClientRequest<T> {
  return performAxiosRequest<T>(axios.put, url, requestBody, responseBodyMapper, config)
}

/**
 * Convenience function for performAxiosRequest using axios.delete.
 */
export function axiosDELETE<T = unknown>(
  url: string,
  responseBodyMapper: (response: any) => any = (response) => response,
  config?: AxiosRequestConfig,
): ClientRequest<T> {
  return performAxiosRequest<T>(axios.delete, url, undefined, responseBodyMapper, config)
}

/**
 * Performs a request using axios. Returns a ClientResult containing the
 * corresponding promise and a callback to cancel the request.
 *
 * Should be called using one of the convenience functions.
 *
 * @param axiosMethod the axios method, e.g. axios.get
 * @param url the request url
 * @param requestBody (optional) the request body
 * @param responseBodyMapper (optional) a mapper function to map the response body
 * @param config (optional) request options specified by axios
 */
function performAxiosRequest<T = unknown>(
  axiosMethod: (url: string, data?: any, config?: AxiosRequestConfig) => Promise<AxiosResponse<T>>,
  url: string,
  requestBody?: any,
  responseBodyMapper: (response: any) => any = (response) => response,
  config?: AxiosRequestConfig,
): ClientRequest<T> {
  const cancelTokenSource = axios.CancelToken.source()
  const result = axiosMethod(url, requestBody, { ...config, cancelToken: cancelTokenSource.token })
    .then((response) => responseBodyMapper(response.data))
    .catch((error) => {
      if (!axios.isCancel(error)) {
        throw error
      }
    })

  return {
    promise: result,
    cancel() {
      cancelTokenSource.cancel()
    },
  }
}
