module.exports = function(sequelize, DataTypes) {
  // creates UserInterests table with no timestamps
  var UserInterests = sequelize.define(
    "UserInterests",
    {
      interestName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      userEmail: {
        type: DataTypes.STRING,
        allowNull: false
      },
      userPhone: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    { timestamps: false }
  );

  return UserInterests;
};
