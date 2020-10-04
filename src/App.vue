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
export default {
  name: 'App',
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
