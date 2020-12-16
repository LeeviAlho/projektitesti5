const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.sendFile(index.html);
});
app.get("/qwe", (req, res) => {
  res.send("qweqweqwe");
});

app.listen(8080);
