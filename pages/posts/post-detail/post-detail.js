let postsData = require('../../../data/posts-data.js');

Page({
    data: {
    },
    onLoad: (option) => {
        let postId = option.id;
        let postData = postsData.post_content[postId];
        this.data.post_key = postData;
    },
})