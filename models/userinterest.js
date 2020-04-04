module.exports = function(sequelize) {
  // creates userinterests table with no timestamps
  var UserInterests = sequelize.define(
    "UserInterests",
    {},
    { timestamps: false }
  );

  return UserInterests;
};
