import Vue from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'

import Nav from '@/components/Nav.vue'
import Harder from '@/components/harder.vue'
import "./iconfont/iconfont.js";
import iconfontSvg from "@/iconfont/iconfont.vue";
import './iconfont/iconfont.css'
import touch from 'vue-directive-touch';
Vue.config.productionTip = false
Vue.component("iconfont-svg",iconfontSvg)
Vue.component('Nav',Nav)
Vue.component('Harder',Harder)
Vue.use(touch);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
