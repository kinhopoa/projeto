'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('usuarios', {
      id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
      },
      nome: Sequelize.STRING,
      email: {
          type: Sequelize.STRING,
          allowNull: false
      },
      senha: {
        type: Sequelize.STRING,
        allowNull: false
      },
      ano_nascimento: {
          type: Sequelize.DATE,
          allowNull: false
      }, 
  },{
      timestamps: false
  });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('usuarios');
  
  }
};
