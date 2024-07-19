const config = require('./config');

require('ts-node/register');

module.exports = {
    username: config.postgresql_username,
    password: config.postgresql_password,
    database: config.database,
    host: config.host,
    dialect: config.dialect
};