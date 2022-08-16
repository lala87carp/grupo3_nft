'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('product_images', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },

      url: {
        type: Sequelize.STRING,
      allowNull: false},

      products_id: {
        type: Sequelize.INTEGER,
         allowNull: false,
        references: {
          model: {
            tableName: 'products'
          },
          key: 'id'
        }
      },

    
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('product_images');
  }
};
