const {DataTypes} = require('sequelize');
const sequelize = require('../databaseconfig/database');
/**
 * 
 *    The below code will help us to create the table into the database.
 * 
 */

const userModel = sequelize.define('Users',
{

    id : {
        type : DataTypes.INTEGER,
        allowNull : false,
        primaryKey : true,
        autoIncrement : true,
    },
    firstname:{
        type : DataTypes.STRING,
        allowNull : false,
    },
});

userModel.sync();
module.exports = userModel;
