import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import echarts from 'echarts'
import vueAxios from 'vue-axios'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


Vue.config.productionTip = false

// 使用插件
Vue.use(VueRouter)
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
// 引入echarts
Vue.prototype.$echarts = echarts
Vue.use(vueAxios, axios)
Vue.use(ElementUI)

import HeaderBar from './components/HeaderBar.vue'
import Index from './view/Index.vue'
import Info from './view/Info.vue'
import Login from './view/Login.vue'
import Register from './view/Register.vue'
import ShopDetail from './view/ShopDetail.vue'
import MarketData from './view/MarketData.vue'


const router = new VueRouter({
  mode: 'history',
  routes: [
    { 
      path: '/', 
      component: HeaderBar, 
      children: [
        { path: '', component: Index }, 
        { path: 'login', component: Login },
        { path: 'register', component: Register },
        { path: 'info', component: Info },
        { path: 'shopdetail', component: ShopDetail },
        { path: 'data', component: MarketData }
      ]
    },
    // { path: '/login', component: Login },
    // { path: '/index', component: Index , children: [{ path: 'home', component: Home }, { path: 'collect', component: Collect }, { path: 'vuelidate', component: FormVueLidate }]},
  ]
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
