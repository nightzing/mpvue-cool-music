let postsData = require('../../../data/posts-data.js');
Page({
    data: {

    },
    onLoad: function(option) {
        let postId = option.id;
        this.data.currentPostId = postId;
        let postData = postsData.post_content[postId];
        this.setData({
            post_key : postData
        });
        
        // let posts_collected = {
        //     1: "true",
        //     2: "false",
        //     3: "true"
        // };

        let postsCollected = wx.getStorageSync('posts_collected');
        if (postsCollected){
            let postcollected = postsCollected[postId]
            this.setData({
                collected: postcollected
            })
        }
        else {
            let postcollected = {};
            postcollected = false;
            wx.setStorageSync('posts_collected', postcollected);
        }
    },
    // 缓存不能超过10个
    // 缓存方法有 ：
    // wx.setStorageSync('') 设置缓存
    // wx.getStorageSync('') 得到缓存
    // wx.removeStorageSync('') 删除指定缓存
    // wx.clearStorageSync()  删除全部缓存
    onCollectionTap:function (event) {
        let postsCollected = wx.getStorageSync('posts_collected');
        console.log(postsCollected)
        let postcollected = postsCollected[this.data.currentPostId];
        // 收藏变成未收藏  未收藏变成收藏
        postcollected = !postcollected;
        postsCollected[this.data.currentPostId] = postcollected;

        // 更新文章是否收藏缓存集
        wx.setStorageSync('posts_collected', postsCollected);
        // 更新数据定义变量，从而实现切换显示隐藏
        this.setData({
            collected: postcollected
        })
    }
})