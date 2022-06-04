'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('carts', {
      id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
      },
      usuarioId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model: 'usuarios',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      total: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 0.00
      }
  },{
      timestamps: false
  });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('carts');
  
  }
};
