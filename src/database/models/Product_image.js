module.exports = (sequelize, dataTypes) => {
    let alias = 'Product_image';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
    
          url: {
            type: dataTypes.STRING,
          allowNull: false},
    };
    let config = {
        tableName: 'product_images',
        timestamps: false
    };
    const Product_image = sequelize.define(alias, cols, config)

    Product_image.associate = function(models) {
        Product_image.belongsTo(models.Role, {
          as:  'product',
          foreignKey: 'products_id'
        });
    }
  
    return Product_image
  }