module.exports = (sequelize, DataType) => { 
    const CartItem = sequelize.define('CartItem', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        cartItem: {
            type: DataType.INTEGER,
            allowNull: false
        },
        productsId: {
            type: DataType.INTEGER,
            allowNull: false
        },
        quantity: {
            type: DataType.INTEGER,
            allowNull: false
        }
    },{
        tableName: 'cartItems',
        timestamps: false
    });
  
    CartItem.associate = (models) => {
        CartItem.belongsTo(models.Cart, {
            foreignKey: 'cartId',
            as: 'cart'
        });

    CartItem.associate = (models) => {
        CartItem.belongsTo(models.Product, {
            foreignKey: 'productId',
            as: 'product'
        });
    }
    }
  
    return CartItem
  }