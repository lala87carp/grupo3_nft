'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('products', [
      {
        name: "indias",
        price: 40.000,
        category_id: 1,
        description: "colección 2019",
        autor: "Dell",
        image: "foto-1662162172446.jpg"

      },
      {
        name: "pierinas",
        price: 10.300,
        category_id: 2,
        description: "colección pierina",
        autor: "Main",
        image:"nuevas-obras-02.jpg"
      },
      {
        name: "monored",
        price: 50.900,
        category_id: 3,
        description: "colección 2017 monoRed",
        autor: "Billy",
        image: "nuevas-obras-03.jpg"
      },
      {
        name: "limit",
        price: 88.000,
        category_id: 2,
        description: "coleccion apenft",
        autor: "braian",
        image: "nuevas-obras-04.jpg"

      },
      {
        name: "puebla",
        price: 28.000,
        category_id: 4,
        description: "collecion apertura",
        autor: "Billy",
        image: "foto-1662166963991.jpg"
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
