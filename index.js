const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Welcome Waleed to docker!</h1>");
});

app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`);
});
