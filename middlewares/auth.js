const jwt = require("jsonwebtoken");
require("dotenv").config();

const { Users } = require("../service/schemas/Users");
const errorHandler = require("../helpers/errorHandler");

const auth = async (req, res, next) => {
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");

  if (bearer !== "Bearer" || !token) {
    next(errorHandler(401, "Not authorized"));
    return;
  }

  try {
    const { _id } = jwt.decode(token, process.env.JWT_SECRET);

    const user = await Users.findById(_id);

    if (!user?.token) {
      next(errorHandler(401, "Not authorized"));
    }

    req.user = user;

    next();
  } catch (error) {
    if (
      error.message === "invalid signature" ||
      error.message === "invalid token"
    ) {
      error.status = 401;
    }

    next(error);
  }
};

module.exports = auth;
