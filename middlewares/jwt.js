const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyToken = (req, res, next) => {
  const bearerToken = req.headers["authorization"];

  if (!bearerToken) return res.status(403).send("No token present");

  const bearer = bearerToken.split(" ");
  const token = bearer[1];

  try {
    jwt.verify(token, process.env.JWT_SECRET_KEY);
  } catch (err) {
    return res.status(400).send("Invalid Token");
  }
  next();
};

module.exports = {
  verifyToken,
};
