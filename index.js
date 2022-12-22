const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('sequelize','root', '', {
    dialect: 'mysql'
});

sequelize.authenticate().then(() => {
    console.log('Connection successfully');
}).catch((err) => {
    console.log('Error ya gaess');
});

console.log("Another task");