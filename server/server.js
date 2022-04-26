const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const path = require("path");
const port = 3000;

app.use(express.static(path.join(__dirname, "../client/dist")));

app.get("/jwt", (req, res) => {
  let { account, secret, iat } = req.query;
  iat = iat.split(".")[0];
  iat = Number(iat);
  const payload = {
    issuer: account,
    iat: iat,
  };
  const token = jwt.sign(payload, secret);
  console.log(payload, secret);
  res.send(token);
});

app.listen(port, () => {
  console.log("listening on port " + port);
});
