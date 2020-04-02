module.exports = function(sequelize) {
  // creates UserInterests table with no timestamps
  var UserInterests = sequelize.define(
    "UserInterests",
    {},
    { timestamps: false }
  );
  //   Interest.associate = function(models) {
  //     Interest.belongsToMany(models.User, {
  //       through: UserInterests
  //     });
  //   };

  return UserInterests;
};
