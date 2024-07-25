"use strict";
import { Model } from "sequelize";
import { USER } from "../types";

module.exports = (sequelize: any, DataTypes: any) => {
  class User extends Model<USER> implements USER {
    name!: string;
    fullName!: string;
    email!: string;
    password!: string;
    phoneNumber!: string;
    isDeleted!: boolean;
    deletedAt!: Date | null;

    static associate(models: any) {}
  }
  User.init(
    {
      name: DataTypes.STRING,
      fullName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
      isDeleted: DataTypes.BOOLEAN,
      deletedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
