// Requiring path to so we can use relative routes to our HTML files
var path = require("path");
var db = require("../models");
var Sequelize = require("sequelize");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.get("/", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/login", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/members.html"));
  });

  // Get all interests
  app.get("/interests", function(req, res) {
    db.Interest.findAll()
      .then(function(data) {
        var context = {
          allInterests: data.map(function(interests) {
            return {
              id: interests.id,
              interestName: interests.interestName
            };
          })
        };
        res.render("interests", {
          allInterests: context.allInterests
        });
      })
      .catch(function(error) {
        res.status(500).send(error);
      });
  });

  app.get("/userinterests", function(req, res) {
    db.UserInterests.findAll({
      where: {
        UserId: req.user.id
      }
    })
      .then(function(data) {
        var context = {
          allChosen: data.map(function(userInterests) {
            return {
              interestName: userInterests.interestName,
              UserId: userInterests.UserId,
              InterestId: userInterests.InterestId
            };
          })
        };
        res.render("userinterests", {
          allChosen: context.allChosen
        });
      })
      .catch(function(error) {
        res.status(500).send(error);
      });
  });
  app.get("/userinterest/:id", function(req, res) {
    console.log("params: " + req.params.id);
    console.log(req.user);
    db.UserInterests.findAll({
      where: {
        InterestId: req.params.id,
        userEmail: {
          [Sequelize.Op.not]: req.user.email
        }
      }
    })
      .then(function(data) {
        var context = {
          thisInterest: data.map(function(myInterest) {
            return {
              interestName: myInterest.interestName,
              userEmail: myInterest.userEmail,
              UserId: myInterest.UserId,
              InterestId: myInterest.InterestId
            };
          })
        };
        res.render("single-interest", {
          thisInterest: context.thisInterest
        });
      })
      .catch(function(error) {
        res.status(500).send(error);
      });
  });
};
