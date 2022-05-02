'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.createTable('produtos', {
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
      preco: {
          type: Sequelize.INTEGER,
          allowNull: false
      },
      estoque: {
          type: Sequelize.INTEGER,
          allowNull: false
      }
  },{
      tablename: 'produto',
      timestamps: false
  }) 
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('produtos');
  
  }
};
