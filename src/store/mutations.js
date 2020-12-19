
/*
直接更新state的对各方法的对象
 */
//写法也较为固定
//1.需要引入mutation-types中的所有types
import Vue from 'vue'
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  RESET_USER_INFO,
  RECEIVE_GOODS,
  RECEIVE_INFO,
  RECEIVE_RATINGS,
  ADD_CARTCOUNT,
  SUB_CARTCOUNT,
  CLEARCART,
  RECEIVE_SEARCH_SHOP,
} from './mutation-types'
//这里引入了3各types，则在export default中应该对应三个方法，方法名用以上的types名字
export default {
  //actions与mutation交互的时候，传的是包含数据的对象，因此不能直接传address，而是传包含address的对象，即{{address}}
  //!!!!!!再次提醒，{}包含的是响应得到的数据对象，要区分开来
  [RECEIVE_ADDRESS] (state,{address}){
    state.address=address
  },
  [RECEIVE_CATEGORYS] (state,{categorys}){
    state.categorys=categorys
  },
  [RECEIVE_SHOPS] (state,{shops}){
    state.shops=shops
  },
  [RECEIVE_USER_INFO] (state,{userInfo}){
    state.userInfo=userInfo
  },
  [RESET_USER_INFO](state){
    //{}回到初始状态
    state.userInfo={} //即重置userinfo
  },
  [RECEIVE_INFO] (state,{info}){
    state.info=info
  },
  [RECEIVE_GOODS] (state,{goods}){
    state.goods=goods
  },
  [RECEIVE_RATINGS] (state,{ratings}){
    state.ratings=ratings
  },

  [SUB_CARTCOUNT](state,{food}) {
    if (food.count) {
      //{state}是必传参数
      //有值才能去减少
      food.count--
      if(food.count === 0) {
        state.cartFoods.splice(state.cartFoods.indexOf(food), 1)
      }
    }
  },

  [ADD_CARTCOUNT] (state,{food}){
    if(!food.count){
      //第一次增加时，则增加这个count属性，同时使其值为1
      //若直接使用food.count=1,有实际的添加，但页面无法绑定数据
      /*对象、属性名、属性值
       */
      Vue.set(food,'count',1)
      state.cartFoods.push(food)
    }else{
      food.count++
    }
  },
  [CLEARCART] (state){
    state.cartFoods.forEach(food=>food.count=0)
    state.cartFoods=[]
  },


  [RECEIVE_SEARCH_SHOP](state, {searchShops}) {
    state.searchShops = searchShops
  },
}
