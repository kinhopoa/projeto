'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('cartItems', {
      id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
      },
      cartId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model: 'carts',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      productsId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model: 'products',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      }
  },{
      timestamps: false
  });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('cartItems');
  
  }
};
