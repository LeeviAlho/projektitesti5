const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("<html>");
  res.send('<script src="src/index.js"></script>');
  res.send("<head>");
  res.send('<meta charset="UTF-8" />');
  res.send("<title>tic tac toe table</title>");
  res.send("</head>");

  res.send("<body>");
  res.send('<div class="w3-container" id="board"></div>');
  res.send('<div id="table"></div>');
  res.send("<!Tic Tac Toe table>");
  res.send('<p id="counter"></p>');

  res.send('<div id="wincondition"></div>');
  res.send("</body>");

  res.send('<script src="src/table.js"></script>');
  res.send('<script src="src/buttons.js"></script>');
  res.send("</html>);");
});

app.get("/qwe", (req, res) => {
  res.send("qweqweqwe");
});

app.listen(8080);
