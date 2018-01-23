let postsData = require('../../../data/posts-data.js');
Page({
    data: {

    },

    onLoad: function(option) {
        //获取页面ID
        let postId = option.id;
        //存储页面ID
        this.data.currentPostId = postId;
        //获取此ID的内容
        let postData = postsData.post_content[postId];
        //将内容存储到data数据中
        this.setData({
            post_key : postData
        });

        // 获取是否收藏缓存，首次因为还未设置所以为 false
        let postsCollected = wx.getStorageSync('posts_collected');
        if (postsCollected){
            let postcollected = postsCollected[postId]
            this.setData({
                collected: postcollected
            })
        }
        //首次直接跳到else
        else {
            let postcollected = {};
            postcollected = false;
            wx.setStorageSync('posts_collected', {postcollected});
        }
    },
    //初始化缓存完成

    // 缓存不能超过10个
    // 缓存方法有 ：
    // wx.setStorageSync('') 设置缓存
    // wx.getStorageSync('') 得到缓存
    // wx.removeStorageSync('') 删除指定缓存
    // wx.clearStorageSync()  删除全部缓存
    onCollectionTap: function(event){
        let postsCollected = wx.getStorageSync('posts_collected');
        let postcollected = postsCollected[this.data.currentPostId];
        // 收藏变成未收藏  未收藏变成收藏
        postcollected = !postcollected;

        // 更新文章是否收藏缓存集
        postsCollected[this.data.currentPostId] = postcollected;
        //重新写入缓存集
        wx.setStorageSync('posts_collected', postsCollected);

        // 更新数据定义变量，从而实现切换显示隐藏
        this.setData({
            collected: postcollected
        })
    }
})