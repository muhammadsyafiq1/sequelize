const { Sequelize, Op } = require("sequelize")
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
// const User = sequelize.define('users', {
//     username: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         validate:{
//             len: [3, 16]
//         }
//     },
//     password: {
//         type: DataTypes.STRING
//     },
//     age: {
//         type: DataTypes.INTEGER,
//         defaultValue: 21
//     },
//     WittCodeRocks :{
//         type: DataTypes.BOOLEAN,
//         defaultValue: true
//     }
// }, {
//     freezeTableName: true
// });

// -------------------------------------------------models migrate

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

// ----------------------------------------------------model querying

// update table and create data
// User.sync({alter: true}).then(() => {
//     const user = User.build({username: "syafiq", password: "123", age: 25, WittCodeRocks: true});
//     return user.save();
// }).then((data) => {
//     console.log('user add to database');
// }).catch((err) => {
//     console.log(err);
// })

//bulk create & test validation bulk create
// User.sync({alter: true}).then(()=>{
//     return User.bulkCreate([
//         {
//             username: 'a',
//             age: '23',
//             password: 123
//         },
//         {
//             username: 'aaaaa',
//             age: '23',
//             password: 123
//         }
//     ], { 
//         validate: true
//     });
// }).then((data)=>{
//     data.forEach((element)=>{
//         console.log(element.toJSON());
//     });
// }).catch((err)=>{
//     console.log(err);
// })

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

//all data with attribute
// User.sync({alter: true}).then(() => {
//     return User.findAll({
        // SUM, AVG
        // EXCLUDE UNTUK HIDE COLUMN
//         attributes: [[sequelize.fn('AVG', sequelize.col('age')), 'Jumlah umur']]
//     });
// }).then((data) => {
//     data.forEach((element) => {
//         console.log(element.toJSON());
//     })
// }).catch((err) => {
//     console.log(err);
// });

//where filter
// User.sync({alter: true}).then(() => {
    // return User.findAll({ attributes: ['username'], where: {age: 18}});
//     return User.findAll({where: {age: 23, username: 'jeruk'}});
// }).then((data) => {
//     data.forEach((element) => {
//         console.log(element.toJSON());
//     })
// }).catch((err) => {
//     console.log(err);
// });


//limit
// User.sync({alter: true}).then(() => {
//     return User.findAll({limit: 1});
// }).then((data) => {
//     data.forEach((element) => {
//         console.log(element.toJSON());
//     })
// }).catch((err) => {
//     console.log(err);
// });

//group by
// User.sync({alter: true}).then(() => {
//     return User.findAll({
//         attributes: ['username',
//                     [sequelize.fn('SUM', sequelize.col('age')), 'sum_age']],
//     group: 'username'});
// }).then((data) => {
//     data.forEach((element) => {
//         console.log(element.toJSON());
//     })
// }).catch((err) => {
//     console.log(err);
// });

//group by with Op sequelize
// User.sync({alter: true}).then(() => {
//     return User.findAll({
//         where :{
            // gt = greater cari nilai lebih besar
            // age: {
            //     [Op.gt]: 18
            // }

            //or sambil semua data yg ada kesesuaian dengan filter
            // and ambil data lebih spesifik
            // [Op.and]: {username: 'b', age: 18}
//         }
//     });
// }).then((data) => {
//     data.forEach((element) => {
//         console.log(element.toJSON());
//     })
// }).catch((err) => {
//     console.log(err);
// });


//--------------------------------------------------------relationships

const Country = sequelize.define('country', {
    countryName: {
        type: DataTypes.STRING,
        unique: true
    }
}, {
    timestamps: false
});

const Capital = sequelize.define('capital', {
    capitalName :{
        type: DataTypes.STRING,
        unique: true
    }
}, {
    timestamps: false
});

//nantinya ada field countryId di tabel capital - otomatis
Country.hasOne(Capital);
// bisa didefinisikan
// Country.hasOne(Capital, {foreignKey: 'soccer'});

sequelize.sync({alter: true}).then(() => {
    // return Country.bulkCreate([
    //     {
    //         capitalName : 'spain'
    //     },
    //     {
    //         capitalName: 'germany'
    //     },
    //     {
    //         capitalName : 'indonesia'
    //     }
    // ]);
}).catch((err) => {
    console.log(err);
})

