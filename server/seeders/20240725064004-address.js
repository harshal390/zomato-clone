'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Addresses',
      [
        {
          userId: 1,
          address1: "4d,xyz society",
          address2: "near navrangpura",
          address3: "university road",
          city: "ahmedabad",
          state: "gujarat",
          country: "india",
          postalCode: "380001"
        },
        {
          userId: 1,
          address1: "8",
          address2: "abc society",
          address3: "university road",
          city: "ahmedabad",
          state: "gujarat",
          country: "india",
          postalCode: "380002"
        },
        {
          userId: 2,
          address1: "201,pqr complex",
          address2: "near abc society",
          address3: "def road",
          city: "navsari",
          state: "gujarat",
          country: "india",
          postalCode: "396445"
        },
      ]
      , {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Addresses', null, {});
  }
};
