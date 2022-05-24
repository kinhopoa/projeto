module.exports = (sequelize, DataType) => { 
  const Usuario = sequelize.define('Usuario', {
      id: {
          type: DataType.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
      },
      nome: DataType.STRING,
      email: {
          type: DataType.STRING,
          allowNull: false
      },
      senha: {
        type: DataType.STRING,
        allowNull: false
      },
      ano_nascimento: {
          type: DataType.DATE,
          allowNull: false
      }, 
  },{
      tableName: 'usuarios',
      timestamps: false
  })

  return Usuario
}