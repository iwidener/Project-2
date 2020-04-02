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

  // creates UserInterests table with no timestamps
  // var UserInterests = sequelize.define(
  //   "UserInterests",
  //   {},
  //   { timestamps: false }
  // );
  Interest.associate = function(models) {
    Interest.belongsToMany(models.User, {
      through: models.UserInterests
    });
  };

  return Interest;
};
