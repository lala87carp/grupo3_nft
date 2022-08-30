'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('products', [
      {
        name: "indias",
        price: 40.000,
        category_id: 1,
        description: "colección 2019",
        autor: "Dell"
      },
      {
        name: "indias",
        price: 40.000,
        category_id: 1,
        description: "colección 2019",
        autor: "Dell"
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
    await queryInterface.bulkDelete('products', null, {});
  }
};
