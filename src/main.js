import Vue from "vue";
import App from "./App";

Vue.config.productionTip = false;
App.mpType = "app";

const app = new Vue(App);
app.$mount();

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: [
      "pages/logs/main",
      "pages/search/main",
      "pages/unindex/main",
      "^pages/index/main",
      "pages/music/main"
    ],
    window: {
      backgroundTextStyle: "light",
      navigationBarBackgroundColor: "#fff",
      navigationBarTitleText: "音乐播放器",
      navigationBarTextStyle: "black"
    },
    tabBar: {
      backgroundColor: "#7054dd",
      color: "#fff",
      selectedColor: "#5bf4ef",
      list: [
        {
          iconPath: "./static/音乐推荐.png",
          selectedIconPath: "./static/音乐推荐1.png",
          pagePath: "pages/index/main",
          text: "发现音乐"
        },
        {
          iconPath: "./static/我的1.png",
          selectedIconPath: "./static/我的.png",
          pagePath: "pages/logs/main",
          text: "我的音乐"
        }
      ]
    }
  }
};
