const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

app.use(express.static(path.join(__dirname, "../client/dist")));

app.get("/jwt", (req, res) => {
  res.send({ text: "hello" });
});

app.listen(port, () => {
  console.log("listening on port " + port);
});
