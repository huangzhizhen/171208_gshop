/*
通过mutaion间接更新state的多个方法的对象
*/
//由于有3各types，因此在actions.js中应该有3各与后台交互的异步actions
//1.引入types
//2.引入与后台交互的接口函数
//// 给action注册事件处理函数。当这个函数被触发时候，
// 将状态提交到mutations中处理
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  RESET_USER_INFO,
  RECEIVE_RATINGS,
  RECEIVE_GOODS,
  RECEIVE_INFO,
  ADD_CARTCOUNT,
  SUB_CARTCOUNT,
  CLEARCART,
  RECEIVE_SEARCH_SHOP,
} from './mutation-types'

import {
  reqAddress,
  reqFootCategory,
  reqShops,
  reqUserInfo,
  reqLogout,
  reqShopGoods,
  reqShopInfo,
  reqShopRatings,
  reqSearchShop,
} from '../api'

export default {

  //3.定义3个异步action
  //3.1异步获取地址的action
  //是否需要参数根据接口函数而定,参数要在state中取
  async getAddress ({commit, state}) {
    //发送异步ajax请求
    const geohash = state.latitude + ',' + state.longitude
    //对于返回的结果数据result，可以查看接口文档
    const result = await reqAddress(geohash)
    //提交mutation---
    if (result.code === 0) {
      const address = result.data

      //调用mutation里的请求接收addrees函数
      commit(RECEIVE_ADDRESS, {address})
    }
    // 如何获取响应数据的问题--两种方法--1promise.then---2.async--await
  },
  //3.2异步获取商品分类的action
  async getCategorys ({commit}) {
    //发送异步ajax请求
    //对于返回的结果数据result，可以查看接口文档
    const result = await reqFootCategory()
    //提交mutation---
    if (result.code === 0) {
      const categorys = result.data
      //调用mutation里的请求接收addrees函数
      commit(RECEIVE_CATEGORYS, {categorys})
    }
  },

  /////*********最后在app.vue中触发调用（测试）
  //3.3异步获取商店列表的action
  async getShops ({commit, state}) {
    //发送异步ajax请求
    /*const latitude = state.latitude
    const longitude= state.longitude*/
    const {longitude,latitude} =state
    //对于返回的结果数据result，可以查看接口文档
    //注意参数的顺序
    const result = await reqShops(longitude,latitude)
    //提交mutation---
    if (result.code === 0) {
      const shops = result.data
      //调用mutation里的请求接收addrees函数
      commit(RECEIVE_SHOPS, {shops})
    }
  },


  //同步异步主要时看目前有没有这个数据，需不需要从后台获取
  //若需要，则异步，反之同步
  //同步记录用户信息
  //这个userInfo是在login中传过来的用户，最后在login中更新state中的userInfo，便于其他组件获取即可
  recordUser ({commit},userInfo){
    //const userInfo=state.userInfo---不用异步发请求，因此这里不用取到state
    //直接commit提交
    commit(RECEIVE_USER_INFO,{userInfo})
    //最后在login组件中做相应操作即可

  },

  //异步获取用户信息
  async getUserInfo({commit}){
    const result=await reqUserInfo()
    if(result.code===0){
      //即当能够成功发送请求时，表示已经登录的状态，因此可以在session中获取user
      const userInfo=result.data
      commit(RECEIVE_USER_INFO,{userInfo})
    }
    //传给RECEIVE_USER_INFO，刷新时则不会清除记录
  },

  //异步登出
  async logout({commit}){
    const result=await reqLogout()
    if(result.code===0){
      commit(RESET_USER_INFO)
    }
  },


  //mock部分的异步action
  //异步获取商家信息
  async getShopInfo({commit}){
    const result=await reqShopInfo()
    if(result.code===0){
      const info=result.data
      //console.log(info)
      commit(RECEIVE_INFO,{info})
    }
  },

//异步获取评价信息
  async getShopRatings({commit},callback){
    const result=await reqShopRatings()
    if(result.code===0){
      const ratings=result.data
      commit(RECEIVE_RATINGS,{ratings})
      callback && callback()
    }
  },

  //异步获取商品信息
  //callback变量用来接收函数（在异步请求中，callback可传可不传
  async getShopGoods({commit},callback){
    const result=await reqShopGoods()
    if(result.code===0){
      const goods=result.data
      commit(RECEIVE_GOODS,{goods})
      //数据更新了，通知一下组件
      //执行以上之后，这是数据已经得到更行
      //则执行callback函数（即执行传过来的函数）
      callback && callback()  //因为也有可能不传，比如用watch监视，则不需要
    }
  },
  //同步更新商品购物车数量count
  updateFoodCount({commit},{isAdd,food}){
    if(isAdd){
      //这里{food}要作为参数传给mutations中的函数
      commit(ADD_CARTCOUNT,{food})
    }else{
      commit(SUB_CARTCOUNT,{food})
    }
  },
  //清除购物车
  clearCart({commit}){
    commit(CLEARCART)
  },

  //异步获取搜索的商店
  async searchShops({commit,state},keyword){
    const geohash=state.latitude + ',' + state.longitude
    const result=await reqSearchShop(geohash,keyword)
    if(result.code===0){
      const searchShops=result.data
      commit(RECEIVE_SEARCH_SHOP,{searchShops})
      //!!!!!!searchShops要和mutation中的一致
    }
  },
}
