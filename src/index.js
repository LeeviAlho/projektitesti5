import "style/style.css";

const express = require("express");

const app = express();

const PORT = 8080;

// View engine setup
app.set("view engine", "ejs");

// Without middleware
app.get("/", function (req, res) {
  // Rendering home.ejs page
  res.render("home");
});

app.get("/qwe", (req, res) => {
  res.send("qweqweqwe");
  return 0;
});

app.listen(PORT, function (err) {
  if (err) console.log(err);
  console.log("Server listening on PORT", PORT);
});
