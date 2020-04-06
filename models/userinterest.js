module.exports = function(sequelize, DataTypes) {
  // creates UserInterests table with no timestamps
  var UserInterests = sequelize.define(
    "UserInterests",
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

  return UserInterests;
};
