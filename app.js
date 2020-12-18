var express = require("express");
var cookieParser = require("cookie-parser");

var app = express();

var PORT = 8080;

var Mongoose = require("mongoose").MongoClient;
var url = "mongodb://localhost:27017/";
var mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// View engine setup
app.set("view engine", "ejs");

// Without middleware
app.get("/", function (req, res) {
  // Rendering home.ejs page
  res.render("home");
  return 0;
});

app.get("/qwe", (req, res) => {
  res.send("qweqweqwe");
  return 0;
});

app.listen(PORT, function (err) {
  if (err) console.log(err);
  console.log("Server listening on PORT", PORT);
});
