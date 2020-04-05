module.exports = function(sequelize) {
  // creates UserInterests table with no timestamps
  var UserInterests = sequelize.define(
    "UserInterests",
    {},
    { timestamps: false }
  );

  return UserInterests;
};
