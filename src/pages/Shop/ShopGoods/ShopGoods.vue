<template>
  <div>
    <div class="goods">
      <div class="menu-wrapper">
        <ul>
          <!--current :class="{current:index===currentIndex}-->
          <li class="menu-item" v-for="(good,index) in goods" :key="index"
              :class="{current:index===currentIndex}" @click="clickMenuItem(index)">
            <span class="text bottom-border-1px">
              <img class="icon" :src="good.icon" v-if="good.icon">{{good.name}}
            </span>
          </li>
        </ul>
      </div>
      <div class="foods-wrapper" ref="foodsWrapper">
        <ul ref="foodsUl">
          <li class="food-list-hook" v-for="(good,index) in goods" :key="index">
            <h1 class="title">{{good.name}}</h1>
            <ul>
              <li class="food-item bottom-border-1px" v-for="(food,index) in good.foods"
                  :key="index" @click="showFood(food)">
                <div class="icon">
                  <img width="57" height="57" :src="food.icon">
                </div>
                <div class="content">
                  <h2 class="name">{{food.name}}</h2>
                  <p class="desc">{{food.description}}</p>s
                  <div class="extra">
                    <span class="count">月售{{food.sellCount}}份</span>
                    <span>好评率{{food.rating}}%</span></div>
                  <div class="price">
                    <span class="now">￥{{food.price}}</span>
                  </div>
                  <div class="cartcontrol-wrapper">
                  <CartControl :food="food"></CartControl>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <shopCart></shopCart>
    </div>
    <Food :food="food" ref="food"></Food>
  </div>
</template>

<script>
  import shopCart from '../../../components/shopCart/shopCart'
  import Food from '../../../components/Food/Food'
  import CartControl from '../../../components/CartControl/CartControl'
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    data(){
      return{
        scrollY:0,
        tops:[],
        food:{},//需要显示的food，需要点击某个食物的li，才显示相应的food

      }
    },

    mounted () {
      this.$store.dispatch('getShopGoods',()=>{//数据更新后执行
        this.$nextTick(()=>{//列表数据更新后执行
          //列表数据显示后执行
          //初始化滚动条
          this._initScroll()
          this._initTops()
        })
      })

    },
    computed:{
      ...mapState(['goods']),

      /*
      首要：先实现列表的滑动效果
      1.在滑动过程中，实时收集scrollY
      2.列表第一次显示后，收集tops
      3.实现currentIndex的计算逻辑
       */
      //计算的到当前分类的下标
      currentIndex(){
        //1.得到条件数据
        const {scrollY,tops}=this
        //2.根据条件计算产生一个结果
        //这里使用findIndex()方法
        //console.log(tops)
        //如
        const index=tops.findIndex((top,index)=>{
          //当前原始为top，对应下标为index
          return scrollY>=top && scrollY<tops[index+1]
        })
        //3.返回结果
        return index
      }
    },
    methods:{
      //methods中一般放的是与事件相关的函数，为了区别，这里加'_'
      _initScroll(){
        //初始化滚动条
        //let wrapper=document.querySelector('.menu-wrapper'),{pullUpLoad:true}
        new BScroll('.menu-wrapper',{
          click: true
        })
        this.foodsScroll=new BScroll('.foods-wrapper',{
          probeType:2,
          click:true
        })
        //为右侧列表绑定scroll监听
        this.foodsScroll.on('scroll',({x,y})=>{
          //console.log(x,y)
          this.scrollY=Math.abs(y)
        })
        //为左侧列表绑定srcollEnd即结束的监听
        this.foodsScroll.on('scrollEnd',({x,y})=>{
          console.log('scrollEnd',x,y)
          this.scrollY=Math.abs(y)
        })
      },
      //初始化tops
      _initTops(){
        //1.初始化tops
        const tops=[]
        let top=0
        tops.push(top)
        //2.收集tops
        //找到所有分类的li
        //const lis=document.getElementsByClassName('foods-wrapper') --全局查找
        const lis=this.$refs.foodsUl.getElementsByClassName('food-list-hook')
        //伪数组变成真数组
        //Array.prototype.slice.call(lis).forEach(li=>{
        Array.from(lis).forEach(li=>{
          top+=li.clientHeight
          tops.push(top)
        })
        //3.更新状态
        this.tops=tops
        //console.log(tops)
      },
      clickMenuItem(index){
        //console.log(index)
        //使用右侧列表滑动到对应的位置
        //得到目标位置scrollY
        const scrollY=this.tops[index]
        //立即更新scrollY(让带点击的分类项成为当前分类）
        this.scrollY=scrollY
        //平滑滑动右侧列表
        this.foodsScroll.scrollTo(0,-scrollY,300)

      },

      showFood(food){
        //这里参数不能传index，因为有两层index，类别good一层，foods一层
        //显示点击的food
        //1.设置food
        this.food=food
        //显示Food----有两种方法
        //方法1直接将条件放在Food标签中
        //方法2调用子组件Food中的方法（即在Food子组件内部控制隐藏
        this.$refs.food.toggleShow()


      }
    },
    components:{
      CartControl,
      Food,
      shopCart
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../commont/stylus/mixins.styl"
  .goods
    display: flex
    position: absolute
    top: 195px
    bottom: 46px
    width: 100%
    background: #fff;
    overflow: hidden
    .menu-wrapper
      flex: 0 0 80px
      width: 80px
      background: #f3f5f7
      .menu-item
        display: table
        height: 54px
        width: 56px
        padding: 0 12px
        line-height: 14px
        &.current
          position: relative
          z-index: 10
          margin-top: -1px
          background: #fff
          color: $green
          font-weight: 700
          .text
            border-none()
        .icon
          display: inline-block
          vertical-align: top
          width: 12px
          height: 12px
          margin-right: 2px
          background-size: 12px 12px
          background-repeat: no-repeat
        .text
          display: table-cell
          width: 56px
          vertical-align: middle
          bottom-border-1px(rgba(7, 17, 27, 0.1))
          font-size: 12px
    .foods-wrapper
      flex: 1
      .title
        padding-left: 14px
        height: 26px
        line-height: 26px
        border-left: 2px solid #d9dde1
        font-size: 12px
        color: rgb(147, 153, 159)
        background: #f3f5f7
      .food-item
        display: flex
        margin: 18px
        padding-bottom: 18px
        bottom-border-1px(rgba(7, 17, 27, 0.1))
        &:last-child
          border-none()
          margin-bottom: 0
        .icon
          flex: 0 0 57px
          margin-right: 10px
        .content
          flex: 1
          .name
            margin: 2px 0 8px 0
            height: 14px
            line-height: 14px
            font-size: 14px
            color: rgb(7, 17, 27)
          .desc, .extra
            line-height: 10px
            font-size: 10px
            color: rgb(147, 153, 159)
          .desc
            line-height: 12px
            margin-bottom: 8px
          .extra
            .count
              margin-right: 12px
          .price
            font-weight: 700
            line-height: 24px
            .now
              margin-right: 8px
              font-size: 14px
              color: rgb(240, 20, 20)
            .old
              text-decoration: line-through
              font-size: 10px
              color: rgb(147, 153, 159)
          .cartcontrol-wrapper
            position: absolute
            right: 0
            bottom: 12px
</style>
