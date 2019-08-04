import Vue from 'vue'
import App from './App.vue'

import router from '@/router'
import ElementUi from 'element-ui'

import axios from '@/api'

import 'element-ui/lib/theme-chalk/index.css'

import '@/style/index.less'
Vue.prototype.$http = axios
Vue.use(ElementUi)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
