'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('products', [
      {
       name: indias },
    {
      price: 240.000},
    {
      
      category: 2},
    {
      description: "colección 2019" }
      
        ], {});
    },
   
  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('products', null, {});
  }
};
