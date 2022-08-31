'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('users', [
      {
        name: "Laura",
        email: "Laura@gmail.com",
        birthday: "1994/03/22",
        roles_id: 1,
        password: bcrypt.hashSync("123456",10),
        image:"foto-1661635509583.jpeg",

      },
      {
        name: "Braian",
        email: "Braian_maynard@hotmail.com",
        birthday: "1997/07/21",
        roles_id: 1,
        password: bcrypt.hashSync("123456",10),
        image:"foto-1661635509583.jpeg",

      },
      {
      name: "Margarita",
      email: "maggie200ar@hotmail.com",
      password: bcrypt.hashSync("123456",10),
      image:"foto-1661635509583.jpeg",
      birthday:"2008/08/08",
      roles_id: 1,
      }


    ], {});

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('users', null, {});
  }
};
