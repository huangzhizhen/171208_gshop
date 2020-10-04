
/*这是一个路由器对象模块*/

import Vue from 'vue'
import VueRouter from 'vue-router'
import MSite from '../pages/Msite/MSite.vue'
import Order from '../pages/Order/Order.vue'
import Search from '../pages/Search/Search.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'
//声明使用插件
Vue.use(VueRouter)
//由于vue-router是一个构造函数类型
export default new VueRouter({
  //配置所有路由
  routes:[
    {
      path:'/msite',
      component:MSite,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/order',
      component:Order,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/search',
      component:Search,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/profile',
      component:Profile,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/',
      redirect:'/msite',
      meta:{
        showFooter:true
      }
    },
    {
      path:'/login',
      component:Login
    },
  ]
})
