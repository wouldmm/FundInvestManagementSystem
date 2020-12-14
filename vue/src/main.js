import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import { Button, Input,Form,FormItem } from 'element-ui'

Vue.use(Button)
Vue.use(Input)
Vue.use(Form)
Vue.use(FormItem)

import axios from 'axios'
//配置请求的根路径
axios.defaults.baseURL = "http://127.0.0.1:8000/"
axios.interceptors.request.use(config => {
  console.log(config)
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return config
  //config.headers.Authorization = 'token ' + window.sessionStorage.getItem('token')
  config.headers.Authorization = 'JWT ' + window.sessionStorage.getItem('token')
  return config
})
Vue.prototype.$http = axios


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
