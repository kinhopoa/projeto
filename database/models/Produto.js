module.exports = (sequelize, DataType) => {
    const Produto = sequelize.define('Produto', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nome: {
            type: DataType.STRING,
            allowNull: false
        },
        preco: {
            type: DataType.INTEGER,
            allowNull: false
        },
        estoque: {
            type: DataType.INTEGER,
            allowNull: false
        }
    },{
        tablename: 'produtos',
        timestamps: false
    })
    return Produto
}