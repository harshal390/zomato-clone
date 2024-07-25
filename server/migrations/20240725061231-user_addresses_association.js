'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint("Addresses", {
      type: "foreign key",
      fields: ["userId"],
      name: "fk_addresses_user_userId",
      references: {
        table: "Users",
        field: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "NO ACTION",
    });

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint("Addresses", "fk_addresses_user_userId", {});
  }
};
