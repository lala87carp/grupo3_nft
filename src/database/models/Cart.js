module.exports = (sequelize, dataTypes) => {
    let alias = 'Cart';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },

        created_at: {
            type: dataTypes.DATE

        },
        deleted_at: {
            type: dataTypes.DATE

        },
        total: {
            type: dataTypes.DECIMAL(11, 2)

        },
        updated_at: {
            type: dataTypes.DATE

        },


    };
    let config = {
        tableName: 'carts',
        timestamps: false
    };
    const Role = sequelize.define(alias, cols, config)

    Cart.associate = function(models) {
        Cart.belongsTo(models.User, {
          as:  'user',
          foreignKey: 'users_id'
        });
    }

    return Cart
}