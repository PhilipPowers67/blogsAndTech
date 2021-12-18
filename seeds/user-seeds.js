const sequelize = require('../config/connection');
const {User, Post} = require('../models');

const userdata = [
    {
        username: 'PhilPowe',
        email: 'PhilPowe@gmail.com',
        password: 'PHILPOWE123'
    },
    {
        username: 'MikeP',
        email: 'MikeP@gmail.com',
        password: 'MIKEP123'
    },
    {
        username: 'PatM',
        email: 'PatM@gmail.com',
        password: 'PATM123'
    },
    {
        username: 'TroyT',
        email: 'TroyT@gmail.com',
        password: 'TROYT123'
    },
    {
        username: 'ChrysP',
        email: 'ChrysP@gmail.com',
        password: 'CHRYSP123'
    }
];

const seedUser = () => User.bulkCreate(userdata, {individualHooks: true });

module.exports = seedUser;