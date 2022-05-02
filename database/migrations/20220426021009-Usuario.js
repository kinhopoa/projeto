'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('usuarios', {
      id_usuario: {
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
    data_nascimento: Sequelize.DATE 
},{
    tableName: 'usuario',
    timestamps: false
})
},

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('usuarios');
  }
};
