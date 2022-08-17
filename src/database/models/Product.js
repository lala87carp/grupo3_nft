

module.exports = (sequelize,dataTypes) => {
    let alias = 'Product';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
          name: {
            type: dataTypes.STRING(255),
            allowNull: false
          },
          price: {
            type: dataTypes.DECIMAL(11,2),
            allowNull: false
          },
          autor: {
            type: dataTypes.STRING(255),
            allowNull: false
          },
          
            image: { 
              type: dataTypes.STRING(255),
              allowNull: true 
    
          },
          description:{
            type: dataTypes.TEXT,
            allowNull: true 
    
    
          },
    
    };
    let config = {
        tableName: 'Product',
        timestamps: false
    }

    const Product = sequelize.define(alias, cols, config)

    Product.associate = function(models) {
        Product.belongsTo(models.Category, {
          as:  'category',
          foreignKey: 'category_id'
        });
    }
  
    return Product
  }