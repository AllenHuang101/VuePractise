// service 統一出口
import HYRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'

const hyRequest = new HYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      // 攜帶token的攔截
      const token = ''

      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`
      }

      console.log('request 成功的攔截')
      return config
    },
    requestInterceptorCatch: (err) => {
      console.log('request 失敗的攔截')
      return err
    },
    responseInterceptor: (res) => {
      console.log('response 成功的攔截')
      return res
    },
    responseInterceptorCatch: (err) => {
      console.log('response 成功的攔截')
      return err
    }
  }
})
export default hyRequest
