const express = require("express");
const Login = require("../../controllers/users/Login.js");
const Logout = require("../../controllers/users/Logout.js");
const Regisration = require("../../controllers/users/Registration.js");
const checkAuth = require("../../helpers/checkAuth.js");
const errorHandler = require("../../helpers/errorHandler.js");

const router = express.Router();

router.post("/signup", errorHandler(Regisration));
router.post("/login", errorHandler(Login));
router.post("/logout", checkAuth, errorHandler(Logout));

module.exports = router;
