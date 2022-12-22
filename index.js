const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('sequelize','root', '', {
    dialect: 'mysql'
});

// #1 connection
// sequelize.authenticate().then(() => {
//     console.log('Connection successfully');
// }).catch((err) => {
//     console.log('Error ya gaess');
// });

// console.log("Another task"); 

// #2 Models
const User = sequelize.define('users', {
    username: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.DataTypes.STRING
    },
    age: {
        type: Sequelize.DataTypes.INTEGER,
        defaultValue: 21
    },
    WittCodeRocks :{
        type: Sequelize.DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {
    freezeTableName: true
});

// migrate table
// User.sync().then((data) => {
//     console.log('Success');
// }).catch((err) => {
//     console.log('error');
// });

// drop tabel jika ada dan create table
// User.sync({force: true}).then((data) => {
//     console.log('Success');
// }).catch((err) => {
//     console.log('error');
// });

// tambah atau hapus field table
User.sync({alter: true}).then((data) => {
    console.log('Success');
}).catch((err) => {
    console.log('error');
});