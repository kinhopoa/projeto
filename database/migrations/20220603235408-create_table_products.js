'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
      id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
          type: Sequelize.STRING,
          allowNull: false
      },
      price: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      picture: {
        type: Sequelize.STRING,
        allowNull: false
      }
  },{
      timestamps: false
  });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('products');
  
  }
};
