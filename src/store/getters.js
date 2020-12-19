/*
包含多个基于state的getter计算属性
 */
export default {
  totalCount (state) {
    //使用reduce函数
    //cartFoods代表food中count>0的数组集合，
    //food则表示cartFoods中的一个元素
    return state.cartFoods.reduce((pretotal, food) => pretotal + food.count, 0)
  },
  totalPrice (state) {
    return state.cartFoods.reduce((pretotal, food) => pretotal + food.count * food.price, 0)
  },
  positiveSize(state){
    return state.ratings.reduce((pretotal,rating)=>pretotal+(rating.rateType===0?1:0),0)
  }
}
