import Vue from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'
import Nav from '@/components/Nav.vue'
import "./iconfont/iconfont.js";
import iconfontSvg from "@/iconfont/iconfont.vue";
import './iconfont/iconfont.css'
Vue.config.productionTip = false
Vue.component("iconfont-svg",iconfontSvg)
Vue.component('Nav',Nav)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
