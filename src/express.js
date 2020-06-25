const express = require("express");
const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");

const app = express();

const jwtHandler = jwt({
  secret: jwksRsa.expressJwtSecret({
    jwksUri: "https://gkwang-auth0.auth0.com/.well-known/openid-configuration/jwks",
  }),
  issuer: "https://gkwang-auth0.auth0.com",
});

app.use(jwtHandler);

app.get("/", (req, res) => {
  res.status(200).send("HELLO!");
});

app.listen(8877);


