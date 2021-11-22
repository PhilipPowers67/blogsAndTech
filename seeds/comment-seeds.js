const { Comment } = require('../models');

const commentData = [
    {
        comment_text:
        'I believe the more repositories you have the better understanding an employer or client has on the kind of work you do.',
        user_id: 2,
        post_id: 1,
    }
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;