/*
使用mock.js提供mock数接口
 */

import Mock from 'mockjs'
//将返回的数据存到data中
import data from './data.json'

//在商店详细中，这里我们主要返回3个接口
//使用Mock.mock提供接口


//返回goods的接口
//Mock.mock('/goods',{code:0,data:data.goods})
Mock.mock(/\/goods/, {code:0, data: data.goods})
//返回ratings的接口
Mock.mock(/\/ratings/,{code:0,data:data.ratings})

//返回info的接口
Mock.mock(/\/info/, {code:0, data: data.info})
//思考：向外暴露的问题，保证执行一次即可？
//webpack的打包原理，即是根据入口文件加载所有相关的模块，
// 现mockServer在网外面，因此需要将其关联上去，通过入口main.js中

