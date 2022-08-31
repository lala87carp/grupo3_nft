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
        name: "",

        email: "Tamara_falcon@gmail.com",

        birthday: "1994/03/22",

        roles_id: 1,

        password: bcrypt.hashSync("123456",10),

      },
      {
        name: "Tamara",

        email: "Tamara_falcon@gmail.com",

        birthday: "1994/03/22",

        roles_id: 1,

        password: bcrypt.hashSync("123456",10),

      },
      {
      name: "Margarita",
      email: "maggie200ar@hotmail.com",
      password: "$2a$10$EYPpJDpELDUuI4vMotV7TumI/V9P5XaTpY7oorXoDFe.J4lyQkjCe",
      image:"foto-1661635509583.jpeg",
      birthday:"2008-08-08"
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
