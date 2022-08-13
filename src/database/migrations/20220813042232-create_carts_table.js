'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     await queryInterface.createTable('carts', { 
      id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true },

        created_at:{
          type: Sequelize.DATE

        },
        deleted_at:{
          type: Sequelize.DATE

        },
        total:{
          type: Sequelize.DECIMAL(11,2)

        },
        updated_at:{
          type: Sequelize.DATE

        },
        users_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: {
              tableName: 'users'
            },
            key: 'id'
          }
        },

      });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     await queryInterface.dropTable('carts')
  }
};
