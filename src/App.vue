<template>
  <div id="app">
    <!--即App组件由两部分组成，
      1.路由组件试图
      2.导航即FooterGuide
    --->
    <router-view></router-view>
    <FooterGuide v-if="$route.meta.showFooter"></FooterGuide>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
//import {reqFootCategory, reqFootTypes} from './api'
import {mapActions} from 'vuex'
export default {
  mounted () {
    /*this.$store.dispatch("getAddress")
    this.$store.dispatch("getShops")
    this.$store.dispatch("getCategorys")*/
    this.getAddress()
    this.getUserInfo()
  },
  methods:{
    ...mapActions(['getAddress','getUserInfo'])  //因此在mounted中可以直接调用getAddress()方法
  },
  components: {
    FooterGuide
  }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  //指定App组件得样式
  .app
    wieth 100%
    height 100%
    background #f5f5f5
</style>
