import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from "./router";
import axios from 'axios'
import { store } from './store/store.js'


Vue.use(VueRouter)

axios.defaults.baseURL =  'https://pizza-app-ffbb3.firebaseio.com/'

// 配置Vue原型 (在任何组件中都可以正常使用axios)
Vue.prototype.http = axios;

const router = new VueRouter({
  routes,
  mode:'history',
  // 滚动
  scrollBehavior(to,from,savedPosition){
      // return {x:0 , y:100}

      // return {selector:'.btn'}

      if (savedPosition){
        return savedPosition
      }else {
        return {x:0 , y:0}
      }

  }

})

// 全局守卫
// router.beforeEach((to,from,next) => {
//   // alert("还没有登录，请先登录！")
//   // next()
//
//   if (to.path === '/login' || to.path === '/register'){
//     next()
//   }else {
//     alert("还没有登录，请先登录！");
//     next("/login")
//   }
// })

// 后置钩子(不常用)
// router.afterEach((to,from) => {
//   alert("after each")
// })

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
