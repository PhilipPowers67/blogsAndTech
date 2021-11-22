const seedUser = require('./user-seeds');
const seedPost = require('./post-seeds');
const seedComment = require('./comment-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log("DATABASE SYNCED");
    await seedUser();
    console.log("USERS SYNCED");
    await seedPost();
    console.log("POSTS SYNCED");
    await seedComment();
    console.log("COMMENTS SYNCED");

    process.exit(0);
}

seedAll();