import Vue from 'vue'
const Fly = require("flyio/dist/npm/wx.js") //wx.js为flyio的微信小程序入口文件
const request = new Fly(); //创建fly实例
//添加拦截器
request.interceptors.request.use((config,promise)=>{
    //给所有请求添加自定义header
    config.headers["X-Tag"]="flyio";
    return config;
})
//配置请求基地址
Vue.prototype.$http=request
request.config.baseURL="http://localhost:3000/"

export default request
