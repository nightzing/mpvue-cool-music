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

        // 获取是否收藏缓存，首次因为还未设置所以为 false, (因为缓存为键值对格式，所以初始化时候要用{}把它包起来，直接初始化成数组)
        let postsCollected = wx.getStorageSync('posts_collected');

        // 打开一个新的页面，因为前一个页面有了缓存集，所以会进行这一步
        if (postsCollected){
            // 如果是一个新的页面，那么postcollected 为undefind 
            let postcollected = postsCollected[postId]
            // 如果是一个新的页面，那么给collected传递一个undefind会报错
            if ( !postcollected) {
                postcollected = false
            }
            this.setData({
                collected: postcollected
            })
        }
        //首次直接跳到else
        else {
            let postcollected = {};
            postcollected = false;
            // 把初始化的值变为数组 ！
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

        // 点击收藏按钮时提示框 
        wx.showToast({
            title: postcollected?"收藏成功":"取消成功"
        })
    }
})