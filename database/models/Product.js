module.exports = (sequelize, DataType) => { 
    const Product = sequelize.define('Product', {
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
        description: {
            type: DataType.STRING,
            allowNull: false
        },
        price: {
          type: DataType.FLOAT,
          allowNull: false
        },
        picture: {
            type: DataType.STRING,
            allowNull: false
        }, 
    },{
        tableName: 'products',
        timestamps: false
    });
  
    Product.associate = (models) => {
        Product.hasMany(models.CartItem, {
            foreignKey: 'productId',
            as: 'cartItems'
        })
    }
        return Product
    }
  
    
  