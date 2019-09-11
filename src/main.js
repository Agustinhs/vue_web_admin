import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App.vue'
import router from '@/router'
import store from '@/store'

import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/style.scss'

Vue.use(ElementUI, { size: 'mini' })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
