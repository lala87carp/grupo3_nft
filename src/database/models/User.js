
module.exports = (sequelize,dataTypes) => {
    let alias = 'User';
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
          email: {
            type: dataTypes.STRING(255),
            allowNull: false,
            unique: true
          },
          password: {
            type: dataTypes.STRING(255),
            allowNull: false
          },
          
          image: { 
              type: dataTypes.STRING(255),
              allowNull: true 
    
          },
          birthday:{
            type: dataTypes.DATE
          },
    
    };

    let config = {
        tableName: 'users',
        timestamps: false
    };

    const User = sequelize.define(alias, cols, config)

    User.associate = function(models) {
        User.belongsTo(models.Role, {
          as:  'role',
          foreignKey: 'roles_id'
        });

    };
  
    return User
  };
