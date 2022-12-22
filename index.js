const { Sequelize } = require("sequelize")
const {DataTypes} = Sequelize

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
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            len: [3, 16]
        }
    },
    password: {
        type: DataTypes.STRING
    },
    age: {
        type: DataTypes.INTEGER,
        defaultValue: 21
    },
    WittCodeRocks :{
        type: DataTypes.BOOLEAN,
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
// User.sync({alter: true}).then((data) => {
//     console.log('Success');
// }).catch((err) => {
//     console.log('error');
// });

// update table and create data
// User.sync({alter: true}).then(() => {
//     const user = User.build({username: "syafiq", password: "123", age: 25, WittCodeRocks: true});
//     return user.save();
// }).then((data) => {
//     console.log('user add to database');
// }).catch((err) => {
//     console.log(err);
// })

//bulk create
User.sync({alter: true}).then(()=>{
    return User.bulkCreate([
        {
            username: 'a',
            age: '23',
            password: 123
        },
        {
            username: 'aaaaa',
            age: '23',
            password: 123
        }
    ], { 
        validate: true
    });
}).then((data)=>{
    data.forEach((element)=>{
        console.log(element.toJSON());
    });
}).catch((err)=>{
    console.log(err);
})

//test validation
// User.sync({alter: true}).then(()=>{
//     return User.create(
//         {
//             username: 'a'
//         }
//     );
// }).then((data)=>{
//     data.forEach((element)=>{
//         console.log(element.toJSON());
//     });
// }).catch((err)=>{
//     console.log(err);
// })