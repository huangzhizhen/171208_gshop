<template>
  <div class="star star-24" :class="'star-'+size">
    <span class="star-item" v-for="(sc,index) in starClasses" :class="sc" :key="index"></span>
   <!--<span class="star-item on"></span>
    <span class="star-item on"></span>
    <span class="star-item half"></span>
    <span class="star-item off"></span>--->
  </div>
</template>

<script>
  //定义全局常量
  const STAR_ON='on'
  const STAR_HALF='half'
  const STAR_OFF='off'
  export default {
    props:{
      score:Number,
      size:Number
    },
    computed:{
      starClasses() {
        //1.向数组中放入n个全星'on'
        //2.向数组中放入1/0个半星(半星只会出现一次或者零次)
        //3.向数组中放入n个灰星
        //const {score}=this
        const score =this.score
        const starArr=[]
          //3.4----3+0+2
          //4.6----4+1+0
          //3.5----3+1+1
        //对score取整
        const intscore=Math.floor(score)
        /*应该用循环语句，因为可能有多个
        if(i<=intscore){
          starArr.push(STAR_ON)
        }*/
        for(let i=0;i<intscore;i++) {
          starArr.push(STAR_ON)
        }
        if(score*10-intscore*10>=5){
          starArr.push(STAR_HALF)
        }
        while(starArr.length<5){
          starArr.push(STAR_OFF)
        }
        return starArr
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .star //2x图 3x图
    float left
    font-size 0
    .star-item
      display inline-block
      background-repeat no-repeat
    &.star-48
      .star-item
        width 20px
        height 20px
        margin-right 22px
        background-size 20px 20px
        &:last-child
          margin-right: 0
        &.on
          bg-image('./images/star48_on')
        &.half
          bg-image('./images/star48_half')
        &.off
          bg-image('./images/star48_off')
    &.star-36
      .star-item
        width 15px
        height 15px
        margin-right 6px
        background-size 15px 15px
        &:last-child
          margin-right 0
        &.on
          bg-image('./images/star36_on')
        &.half
          bg-image('./images/star36_half')
        &.off
          bg-image('./images/star36_off')
    &.star-24
      .star-item
        width 10px
        height 10px
        margin-right 3px
        background-size 10px 10px
        &:last-child
          margin-right 0
        &.on
          bg-image('./images/star24_on')
        &.half
          bg-image('./images/star24_half')
        &.off
          bg-image('./images/star24_off')
</style>
