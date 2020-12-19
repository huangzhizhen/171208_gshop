/*
包含了n个接口请求函数----说明会向外暴露很多函数
    有两种方式
      1.export function()
      2.export const reqRegister = ()=>      (箭头函数）
（即前后端的接口要一致）
这里是前端项目
每个函数都是promise对象
 */
import ajax from './ajax'
const BASE_URL='/api'
//注册接口
//注册时即向后台传送username与password---->一个user对象---参数
//需要ajax为桥梁发送请求,ajax返回的结果就是现所需要的结果
//再ajax中需要指定参数
  //url---只需要指定后面部分

//2.获取食品分类列表
export const reqFootCategory=()=>ajax(BASE_URL+'/index_category')
//3.商店数组对象
export const reqShops=(longitude,latitude)=>ajax(BASE_URL+'/shops',{longitude,latitude})
//1.根据经纬度获取地址详情
export const reqAddress=(geohash)=>ajax(`${BASE_URL}/position/${geohash}`)


//4.根据经纬度和关键字搜索商铺列表
export const reqSearchShop = (geohash, keyword) => ajax(BASE_URL+'/search_shops', {geohash, keyword})

//5.获取一次性验证码
export const reqGetcaptcha=()=>ajax(BASE_URL+'/captcha')
//6.用户名密码登录
export const reqPwdLogin=({name,pwd,captcha})=>ajax(BASE_URL+'/login_pwd',{name,pwd,captcha},'POST')
//7.发送短信验证码
export const reqSendCode=(phone)=>ajax(BASE_URL+'/sendcode',{phone})
//8.手机号验证码登录
export const reqSmsLogin=(phone,code)=>ajax(BASE_URL+'/login_sms',{phone,code},'POST')
//18813216310
//9.根据会话获取用户信息
export const reqUserInfo=()=>ajax(BASE_URL+'/userinfo')
//10.用户登出
export const reqLogout=()=>ajax(BASE_URL+'logout')

//以下时mock拦截的请求
/**
 * 获取商家信息
 */
export const reqShopInfo = () => ajax('/info')

/**
 * 获取商家评价数组
 */
export const reqShopRatings = () => ajax('/ratings')

/**
 * 获取商家商品数组
 */
export const reqShopGoods = () => ajax('/goods')
