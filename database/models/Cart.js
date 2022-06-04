module.exports = (sequelize, DataType) => { 
    const Cart = sequelize.define('Cart', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        usuarioId: {
            type: DataType.INTEGER,
            allowNull: false,
        },
        total: {
            type: DataType.FLOAT,
            allowNull: false,
            defaultValue: 0.00
        },

    },{
        tableName: 'carts',
        timestamps: false
    });
  
    Cart.associate = (models) => {
        Cart.belongsTo(models.Usuario, {
            foreignKey: 'usuarioId',
            as: 'usuario'
        });

    Cart.associate = (models) => {
        Cart.hasMany(models.CartItem, {
            foreignKey: 'cartId',
            as: 'items'
        })
    }
    }
  
    return Cart
  }