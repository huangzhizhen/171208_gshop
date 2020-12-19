/*发送任意ajax请求
使用axios发送请求(即向后台发送ajax请求）---需要对该请求进行包装，使得使用起来更加简单
  使用axios封装的ajax请求函数
  函数返回的是peomise对象
其中axios有两种请求凡是，如下：
  axios.get
  axios.post
ajax请求函数封装模块---主要是对参数type处理，当type是get时，则发送get请求，若是post则发送post请求
只是get与post请求中请求参数的连接方式不一样
  get请求的参数跟在url？
  post请求则是在body体中
1.下载axios包-----npm install --save axios
 */
//首先向外暴露一个函数
//默认为GET请求
import axios from 'axios'
export default function ajax(url,data={},type='GET') {
  return new Promise(function (resolve, reject) {
    //这里的return主要时结果的回调函数，即成功了则回调sesolve函数，失败了则回调reject函数
    //即异步返回的数据是response.data
    let promise
    if (type === 'GET') {
      //这里的目的主要是想将参数拼接成url?username=xx&password=XX
      let dataString = '';
      Object.keys(data).forEach(key => {
        dataString += key + '=' + data[key] + '&'
      })
      if (dataString != null) {
        dataString = dataString.substring(0, dataString.length - 1);
        url = url + '?' + dataString;
      }
      //使用axios发送get请求
      promise = axios.get(url)
      ///console.log(promise)
    } else {
      //使用axios发送post请求
      //post请求不用
      promise = axios.post(url, data)
    }
    //response是axios发送请求后得到的promise对象中的response，
    //最后因为响应体的数据杂多，这里只取response中的data
    promise.then(function (response) {
      //成功了则调用resolve
      resolve(response.data);
    }).catch(function (error) {
      //失败了则调用reject
      reject(error)
    })
  })
}



/////将上封装成一个Promise函数，使得该函数直接返回response.data/response.error-----即返回给前端的数据？
