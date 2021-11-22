const { Post } = require('../models');

// Seeds for Posts that are created

const postData = [
    {
        post_title: 'Is it possible for too many repositories to clutter up my GitHub?',
        post_text: 'I have over 20 repositories and i feel as though it is a cluttered mess. Should I create a new Github and only have the important repositories?',
        user_id: 1,
    }
]

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;