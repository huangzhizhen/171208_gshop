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
//注册接口
//注册时即向后台传送username与password---->一个user对象---参数
//需要ajax为桥梁发送请求,ajax返回的结果就是现所需要的结果
//再ajax中需要指定参数
  //url---只需要指定后面部分
  //
  //
export const reqRegister = (user,)=>ajax('/register',user,'POST')


//登录接口
export const reqLogin =({username,password})=>ajax('/login',{username,password},'POST')
//export const reqLogin =(user)=>ajax('/login',user,'POST')


//更新用户接口
export const reqUpdateUser = (user)=>ajax('/update','user','POST')



