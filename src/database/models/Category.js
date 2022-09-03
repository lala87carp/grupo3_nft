module.exports = (sequelize, dataTypes) => {
  let alias = 'Category';
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },

    name: {
      type: dataTypes.STRING(255)
    }
  };
  let config = {
    tableName: 'category',
    timestamps: false
  };
  const Category = sequelize.define(alias, cols, config)

  Category.associate = function (models) {
    Category.hasMany(models.Product, {
      as: 'products',
      foreignKey: 'category_id'
    });
  }


  return Category
}
