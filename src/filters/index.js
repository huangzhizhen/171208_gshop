import Vue from 'vue'
import format from 'date-fns/format'
//import moment from 'moment'
//不需要向外暴露，但是需要在main.js中加载
/*Vue.filter('data-format',function (value,formatStr='YY-MM-DD HH:mm:ss') {
  return moment(value).format(formatStr)
})*/

Vue.filter('data-format',function (value,formatStr='yyyy-MM-dd HH:mm:ss') {
  return format(value,formatStr)
})


/*Vue.filter('date-format', function (value, formatStr='YYYY-MM-DD HH:mm:ss') {
  // return moment(value).format(formatStr)
  return format(value, formatStr)
})*/
