import axios, { AxiosInstance } from 'axios'
import { HYRequestConfig, HYRequestInterceptors } from './types'
import { ElLoading } from 'element-plus'
import { LoadingInstance } from 'element-plus/lib/components/loading/src/loading.js'
const DEAFULT_LOADING = true

class HYRequest {
  instance: AxiosInstance
  interceptors?: HYRequestInterceptors
  showLoading: boolean
  loading?: LoadingInstance

  constructor(config: HYRequestConfig) {
    // 創建axios 實例
    this.instance = axios.create(config)

    this.showLoading = config.showLoading ?? DEAFULT_LOADING
    this.interceptors = config.interceptors

    // 從config中取出的攔截器是對應實例的攔截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )

    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    // 添加所有實例都有的攔截器
    this.instance.interceptors.request.use(
      (config) => {
        console.log('所有實例都有的攔截器: reqeust成功')

        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: '正在请求数据....',
            background: 'rgba(0, 0, 0, 0.5)'
          })
        }

        return config
      },
      (err) => {
        console.log('所有實例都有的攔截器: reqeust失敗')
        return err
      }
    )

    this.instance.interceptors.response.use(
      (res) => {
        console.log('所有實例都有的攔截器: response成功')

        // 將loading移除
        setTimeout(() => {
          this.loading?.close()
        }, 3000)

        const data = res.data
        if (data.returnCode === '-1001') {
          console.log('請求失敗~~~, 錯誤訊息XXXX')
        } else {
          return res.data
        }
      },
      (err) => {
        console.log('所有實例都有的攔截器: response失敗')

        this.loading?.close()
        // 判斷不同的HttpErrorCode顯示不同的錯誤訊息及處理
        switch (err.response.status) {
          case 404:
            console.log('404的錯誤~~~')
            break
        }

        return err
      }
    )
  }

  request<T>(config: HYRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // 1.單個請求對請求config的處理
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }

      // 2.判斷是否顯示loading
      if (config.showLoading === false) {
        this.showLoading = config.showLoading
      }

      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 1.單個請求對數據的處理
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }

          // 2.將showLoading設置為true，這樣才不會影響下一個請求
          this.showLoading = DEAFULT_LOADING
          resolve(res)
        })
        .catch((err) => {
          this.showLoading = DEAFULT_LOADING
          reject(err)
          return err
        })
    })
  }

  get<T>(config: HYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }

  post<T>(config: HYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }

  delete<T>(config: HYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }

  patch<T>(config: HYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}

export default HYRequest
