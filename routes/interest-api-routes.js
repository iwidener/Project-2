var db = require("../models");

module.exports = function(app) {
  app.get("/api/interests", function(req, res) {
    db.Interest.findAll({
      include: [db.User]
    }).then(function(dbInterest) {
      res.json(dbInterest);
    });
  });

  app.get("/api/interests/:id", function(req, res) {
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
