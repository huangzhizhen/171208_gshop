/*
状态对象
 */

export default{
  //Msite首页地址定位的两个固定状态
  latitude: 40.10038,//维度
  longitude: 116.36867,//经度

  //以下三个数据都有从后台接收以及返回的数据，让后台得到的数据覆盖掉原有的数据
  //因此，我要对我的数据进行什么类型的操作？--定义mutation-types
  address: {}, //地址对象信息
  categorys: [], //商品分类--起的名字最好与接口函数名类似
  shops: [], //商家数组
  userInfo:{},//户用信息
  goods:[],//商品列表
  ratings:[],//商家评价列表
  info:{},//商家信息
  cartFoods:[],//购物车中的食品列表
  searchShops:[],//搜索商店
}
