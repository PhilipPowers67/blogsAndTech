const { Post } = require('../models');

// Seeds for Posts that are created

const postData = [
    {
        post_title: 'Is it possible for too many repositories to clutter up my GitHub?',
        post_text: 'I have over 20 repositories and i feel as though it is a cluttered mess. Should I create a new Github and only have the important repositories?',
        user_id: 1,
    },
    {
        post_title: 'Which do you prefer to use SQL or MongoDB?',
        post_text: 'I feel as though SQL is easier to navigate at times.',
        user_id: 2,
    },
    {
        post_title: 'BootCamp vs College Courses',
        post_text: 'Which do you prefer? What are the pros and cons?',
        user_id: 3,
    },
    {
        post_title: 'Finding a job after school.',
        post_text: 'I just completed my computer science degree. What are a couple big name companies that are hiring?',
        user_id: 4,
    }
]

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;