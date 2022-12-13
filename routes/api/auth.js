const express = require("express");
const Login = require("../../controllers/users/Login.js");
const Regisration = require("../../controllers/users/Registration.js");
const errorHandler = require("../../helpers/errorHandler.js");

const router = express.Router();

router.post("/signup", errorHandler(Regisration));
router.post("/login", errorHandler(Login));

module.exports = router;
