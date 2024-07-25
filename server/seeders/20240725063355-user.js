'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users',
      [
        {
          name: "harshal",
          fullName: "Harshal Kahar",
          email: "harshalskahar389@gmail.com",
          password: "Admin@123",
          phoneNumber: "9537407968"
        },
        {
          name: "undefined",
          fullName: "Harshal Kahar 2",
          email: "harshalskahar3891@gmail.com",
          password: "Admin@123",
          phoneNumber: "9537407968"
        },
        {
          name: "restartmyself",
          fullName: "Harshal Kahar 3",
          email: "harshalskahar3892@gmail.com",
          password: "Admin@123",
          phoneNumber: "9537407968"
        },
        {
          name: "null",
          fullName: "Harshal Kahar 4",
          email: "harshalskahar3893@gmail.com",
          password: "Admin@123",
          phoneNumber: "9537407968"
        },

      ]
      , {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
