// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/*入口js*/
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueLazyLoad from 'vue-lazyload'
import {Button} from 'mint-ui'
import loading from './commont/imgs/loading.gif'
import './mock/mockServer'  //加载mockServer.js即可，没有export则没有import XXX
import './filters'
Vue.use(VueLazyLoad,{
  //会产生一个结果即---v-lazy
  //:src替换成v-lazy（哪个组件img标签需要，直接使用即可
  //<img v-lazy="food.img">
  loading
})
//注册全局组件标签
//使用时在相应的组件中使用<mt-button>即可，mt-button为一Button类型
Vue.component(Button.name,Button) //<mt-button>

Vue.config.productionTip = false
/* eslint-disable no-new */
//页面入口
new Vue({
  el: '#app',
  /*components: { App },
  template: '<App/>'*/
  render: h => h(App),
  router,//使用上vue-router
  store,//使用上vuex
})
