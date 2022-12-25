const express = require("express");
const Login = require("../../controllers/users/Login.js");
const Logout = require("../../controllers/users/Logout.js");
const Registration = require("../../controllers/users/Registration.js");
const checkAuth = require("../../helpers/checkAuth.js");
const errorHandler = require("../../helpers/errorHandler.js");
const { schemaRegister, schemaLogin } = require("../../helpers/validations.js");
const validator = require("../../helpers/validator.js");

const router = express.Router();

router.post("/signup", validator(schemaRegister), errorHandler(Registration));
router.post("/login", validator(schemaLogin), errorHandler(Login));
router.post("/logout", checkAuth, errorHandler(Logout));

module.exports = router;
