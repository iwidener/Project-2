// Requiring necessary npm packages
var express = require("express");
var app = express();
var server = require("http").Server(app);

var session = require("express-session");
// Requiring passport as we've configured it
var passport = require("./config/passport");

//Requiring npm dotenv
require("dotenv").config();

//Connect to socket.io
var io = require("socket.io")(server);
io.on("connection", function(socket) {
  console.log("Connected");
  socket.on("disconnect", function() {
    console.log("Disconnected");
  });
});

// Setting up port and requiring models for syncing
var PORT = process.env.PORT || 8080;
var db = require("./models");

// Creating express app and configuring middleware needed for authentication
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// We need to use sessions to keep track of our user's login status
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

// // Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Requiring our routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);
require("./routes/interest-api-routes.js")(app);
require("./routes/user-api-routes.js")(app);

// Catch form submit// message
app.post("/", function(req, res) {
  var number = req.body.number;
  var text = req.body.text;

  io.emit("smsStatus", {
    number: number,
    text: text,
    message: "Hello from the server!"
  });
  return res.json({
    message: "Success!"
  });
});

// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(function() {
  server.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});
