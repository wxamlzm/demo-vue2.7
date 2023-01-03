/*
 * @Author: zd
 * @Date: 2022-12-31 18:47:44
 * @LastEditors: zd
 * @LastEditTime: 2023-01-03 20:47:26
 * @Description: 
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
