import { Sequelize } from "sequelize";

const connection: Sequelize = new Sequelize("", "", "migration-ts-pg", {
  host: "localhost",
  dialect: "postgres",
});

export default connection;