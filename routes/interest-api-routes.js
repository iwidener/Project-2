var db = require("../models");

module.exports = function(app) {
  app.get("/api/interests", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Interest.findAll({
      include: [db.User]
    }).then(function(dbInterest) {
      res.json(dbInterest);
    });
  });

  app.get("/api/interests/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Interest.findOne({
      where: {
        id: req.params.id
      },
      include: [db.User]
    }).then(function(dbInterest) {
      res.json(dbInterest);
    });
  });

  app.post("/api/interests", function(req, res) {
    db.Interest.create(req.body).then(function(dbInterest) {
      res.json(dbInterest);
    });
  });

  app.delete("/api/interest/:id", function(req, res) {
    db.Interest.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbInterest) {
      res.json(dbInterest);
    });
  });
};
