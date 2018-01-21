const postsData = require('../../data/posts-data.js');
Page({
  /*** 页面的初始数据*/
  data: {
    post_key: postsData.post_content
  },
  /*** 生命周期函数--监听页面加载*/
  onLoad: function () { },

  onPostTap: (event) => {
    let postId = event.currentTarget.dataset.postid;
    wx.navigateTo({
      url: "./post-detail/post-detail?id=" + postId
    })
  }
})