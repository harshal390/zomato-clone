"use strict";
import { Model } from "sequelize";
import { ADDRESS } from "../types";
module.exports = (sequelize: any, DataTypes: any) => {
  class Address extends Model<ADDRESS> implements ADDRESS {
    userId!: number;
    address1!: string;
    address2!: string;
    address3!: string;
    city!: string;
    state!: string;
    country!: string;
    postalCode!: string;
    isDeleted!: boolean;
    deletedAt!: Date | null;

    static associate(models: any) {
      //1 to n(user to address);
      Address.belongsTo(models.User);
      models.User.hasMany(Address);
    }
  }
  Address.init(
    {
      userId: DataTypes.INTEGER,
      address1: DataTypes.STRING,
      address2: DataTypes.STRING,
      address3: DataTypes.STRING,
      city: DataTypes.STRING,
      state: DataTypes.STRING,
      country: DataTypes.STRING,
      postalCode: DataTypes.STRING,
      isDeleted: DataTypes.BOOLEAN,
      deletedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Address",
    }
  );
  return Address;
};
