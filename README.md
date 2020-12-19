# shop

外卖 Web App (SPA)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# 1 项目描述
- 此项目为外卖 Web App (SPA) 
- 包括商家, 商品, 购物车, 用户等多个子模块 
- 使用 Vue 全家桶+ES6+Webpack 等前端最新最热的技术
- 采用模块化、组件化、工程化的模式开发
# 2 技术栈
- vue2用于构建用户界面的渐进式框架
- vue-router Vue.js官方的路由管理器
- vuex专为Vue.js应用程序开发的状态管理模式
- webpack模块打包工具
- es6/eslint采用es6语法，并使用eslint检查语法
- stylus对css扩展，让css语言更加强大，优雅

# 3 目标功能
  - [x] 手机验证码登录注册----完成
  - [x] 个人中心----完成
  - [x] 商家首页----完成
  - [x] 商家详情展示----完成
  - [x] 商品详情展示----完成
  - [x] 添加购物车----完成
  - [x] 关键字搜索商家----完成
  - [x] 定位功能----完成
  - [x] 关键字搜索商家----完成
 

# 4 项目结构分析
### gshop
- build : webpack 相关的配置文件夹
- config: webpack 相关的配置文件夹
- index.js: 指定的后台服务的端口号和静态资源文件夹
- node_modules
- src : 源码文件夹
- main.js: 应用入口 js
- static: 静态资源文件夹
- .babelrc: babel 的配置文件
- .editorconfig: 通过编辑器的编码/格式进行一定的配置
- .eslintignore: eslint 检查忽略的配置
- .eslintrc.js: eslint 检查的配置
- .gitignore: git 版本管制忽略的配置
- index.html: 主页面文件
- package.json: 应用包配置文件
- README.md: 应用描述说明的 readme 文件





# 5 项目源码目录结构
### src
- api与后台交互模块文件夹
- common 通用资源文件夹，如fonts/imgs/stylus
- components 非路由组件文件夹
- filter 自定义过滤器模块文件夹
- mock 模拟数据接口文件夹
- pages 路由组件文件夹
- router 路由器文件夹
- store vuex相关模块文件夹
     App.vue 应用组件
     main.js 入口JS
     
# 项目运行
```
git clone https://github.com/huangzhizhen/171208_gshop.git  

cd 171208_gshop

npm install

npm run dev
```
