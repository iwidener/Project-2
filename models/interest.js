module.exports = function(sequelize, DataTypes) {
  var Interest = sequelize.define(
    "Interest",
    {
      interestName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      }
    },
    { timestamps: false }
  );

  Interest.associate = function(models) {
    Interest.belongsToMany(models.User, {
      through: models.UserInterests
    });
  };

  return Interest;
};
