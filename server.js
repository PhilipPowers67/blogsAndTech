const sequelize = require('./config/connection');
const PORT = process.env.PORT || 3001;















//Turns on connection to DB and server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now Listening on Port${PORT}`));
});