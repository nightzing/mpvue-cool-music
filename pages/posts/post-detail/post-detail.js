let postsData = require('../../../data/posts-data.js');
Page({
    data: {
    },
    onLoad: function(option) {
        let postId = option.id;
        let postData = postsData.post_content[postId];
        console.log(postId);
        console.log(postData);
        this.setData({
            post_key : postData
        })
    }
})