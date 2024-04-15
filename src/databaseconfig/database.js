const Sequelize = require('sequelize');
// ORM ---> Object-Relational Mapping
const config = require('config');
const dbConfigs = config.get("dbConfig");


/**
 *   
 *  The below code is for connection string.
 * 
 */
const sequelize = new Sequelize(
  
    dbConfigs.database,
    dbConfigs.user,
    dbConfigs.password,
    {

        host : dbConfigs.host,
        dialect : dbConfigs.dialect,
        port : dbConfigs.port,
        logging : true,
    }
    
);

module.exports = sequelize;