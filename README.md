
# 🎵♥music(音乐播放器) / 微信小程序

![GitHub stars](https://img.shields.io/badge/Webpack-4.1.0-blue.svg)
![GitHub stars](https://img.shields.io/badge/mpvue-1.0.9-yellow.svg)
![GitHub stars](https://img.shields.io/badge/flyio-0.5.4-orange.svg)
![GitHub stars](https://img.shields.io/badge/node-v8.9.3-green.svg)
![GitHub stars](https://img.shields.io/badge/npm-5.8.0-brightgreen.svg)


## 项目前言

    - 本项目是我花了两周时间做出来的大学毕业设计，有什么不足之处，欢迎大家指出。 
    - 另外项目中还有很多不足之处，在制作过程中也遇到了很多的坑，不过看到项目一点点完成，还是感到非常开心满足的！
    - 非常欢迎大家任意 Fork 
    - 也希望大家动动手指给个 Star . 感激不尽~😊

## 项目说明

听歌音乐播放器(小程序)，本项目的目的是为了方便听歌用户，随时随地听歌，不需要下载APP,即用即听

运行项目时，微信开发者工具只需将 dist 文件夹放入即可。另，请将微信开发者工具中的 【不校验合法域名】 勾选！ 否则无法获取数据

数据均来自 [网易云API](https://binaryify.github.io/NeteaseCloudMusicApi/#/),启动项目前，请先启动网易云API服务器

``` bash
安装
$ git clone git@github.com:Binaryify/NeteaseCloudMusicApi.git
$ npm install

运行
$ node app.js
服务器启动默认端口为 3000, 若不想使用 3000 端口 , 可使用以下命令 : Mac/Linux

$ PORT=4000 node app.js
windows 下使用 git-bash 或者 cmder 等终端执行以下命令 :

$ set PORT=4000 && node app.js


```

`因涉及到账号资质问题，此小程序并没有上线`

此源码仅可用作学习和交流,请勿用作商业用途及销售获利


- 前端代码地址：[https://github.com/x751685875/mpvue-music](https://github.com/x751685875/mpvue-music)
- 后端网易云API代码地址：采用网易云API。地址为 [https://binaryify.github.io/NeteaseCloudMusicApi/#/](https://binaryify.github.io/NeteaseCloudMusicApi/#/)


## 项目完成情况
    - 页面
      - index  首页
      - music  播放界面
      - search  搜索界面
      - playlist  播放列表
      - songItem  歌单详情
      - ranking  歌曲排行榜
      - MoreSongList  精品歌单推荐
    - 功能
      - 搜索
      - 加入播放列表
      - 暂停/播放
      - 整个歌单加入播放列表
      - 刷新播放列表
      - 上一曲/下一曲
      - 点赞
      - 评论轮播
      - banner轮播图

## 项目预览

  - 橙色区域均为可点击区域

![CUev6A.png](https://s1.ax1x.com/2018/05/06/CUev6A.png)
![CUeqYD.png](https://s1.ax1x.com/2018/05/06/CUeqYD.png)
![CUmSmt.png](https://s1.ax1x.com/2018/05/06/CUmSmt.png)
![CUeXSH.png](https://s1.ax1x.com/2018/05/06/CUeXSH.png)
![CUeLfe.png](https://s1.ax1x.com/2018/05/06/CUeLfe.png)
![CUejld.png](https://s1.ax1x.com/2018/05/06/CUejld.png)
![CUmp0P.png](https://s1.ax1x.com/2018/05/06/CUmp0P.png)
![CUexOI.png](https://s1.ax1x.com/2018/05/06/CUexOI.png)


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

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
