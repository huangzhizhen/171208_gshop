<template>
  <div class="footer_guide">
    <span class="guide_item" :class="{on: '/msite'===$route.path}" @click="goTo('/msite')">
        <span class="item_icon">
          <i class="iconfont icon-ziyuan"></i>
        </span>
        <span>外卖</span>
    </span>
      <a href="javascript:;" class="guide_item" :class="{on: '/search'===$route.path}" @click="goTo('/search')">
        <span class="item_icon">
          <i class="iconfont icon-sousuo1"></i>
        </span>
        <span>搜索</span>
      </a>
      <a href="javascript:;" class="guide_item" :class="{on: '/order'===$route.path}" @click="goTo('/order')">
        <span class="item_icon">
          <i class="iconfont icon-dingdan"></i>
        </span>
        <span>订单</span>
      </a>
      <a href="javascript:;" class="guide_item" :class="{on: '/profile'===$route.path}" @click="goTo('/profile')">
        <span class="item_icon">
          <i class="iconfont icon-wodedangxuan"></i>
        </span>
        <span>我的</span>
      </a>
  </div>
</template>

<script>
export default {
  methods: {
    goTo(path){
      //这里使用跳转路由的方法
      this.$router.replace(path)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../commont/stylus/mixins.styl"
  .footer_guide
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 50px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column  //主轴为垂直方向，起点在上沿。
      align-items center //交叉轴的中点对齐
      margin 5px
      color #999999
      &.on
        color #02a774
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
      n  .iconfont
          font-size 22px
</style>
