// const jwt = require("jsonwebtoken");
const express = require("express");
const app = express();
const { auth } = require("express-oauth2-jwt-bearer");

const checkJwt = auth({
  audience: "YOUR_API_IDENTIFIER",
  issuerBaseURL: `https://localhost:3000`,
});
module.exports = checkJwt;
