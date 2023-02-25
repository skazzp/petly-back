const jwt = require("jsonwebtoken");
require("dotenv").config();

const checkAuth = (req, res, next) => {
  const token = (req.headers.authorization || "").replace(/Bearer\s?/, "");

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.userId = decoded._id;
      next();
    } catch (err) {
      return res.status(401).json({
        message: "Not authorized",
      });
    }
  } else {
    return res.status(500).json({
      message: "Not authorized",
    });
  }
};

module.exports = checkAuth;
