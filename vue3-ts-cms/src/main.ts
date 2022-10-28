import { createApp } from 'vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// css reset
import 'normalize.css'
import './assets/css/index.less'

// // element 全局引用
// import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import './service/axios_demo'

import App from './App.vue'
import router from './router'
import store from './store'
import { setupStore } from './store'
import hyRequest from './service'

const app = createApp(App)

app.use(router)
app.use(store)
setupStore()
// app.use(ElementPlus)
app.mount('#app')

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

console.log(process.env.VUE_APP_BASE_URL)
console.log(process.env.VUE_APP_BASE_NAME)

// hyRequest.request({
//   url: '/home/multidata',
//   method: 'GET',
//   interceptors: {
//     requestInterceptor: (config) => {
//       console.log('單獨request的攔截器')
//       return config
//     },
//     responseInterceptor: (config) => {
//       console.log('單獨response的攔截器')
//       return config
//     }
//   }
// })

// interface DataType {
//   data: any
//   returnCode: string
//   success: boolean
// }

// hyRequest
//   .request<DataType>({
//     url: '/home/multidata',
//     method: 'GET',
//     showLoading: false
//   })
//   .then((res) => {
//     console.log(res.data)
//   })
