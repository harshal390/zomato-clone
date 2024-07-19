import dotenv from "dotenv";
dotenv.config();

const config = {
  port: process.env.PORT,
  database: process.env.DATABASE,
  dialect: process.env.DIALECT,
  postgresql_username: process.env.POSTGRESQL_USERNAME,
  postgresql_password: process.env.POSTGRESQL_PASSWORD,
  host: process.env.HOST,
};

module.exports = config;
