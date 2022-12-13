const express = require("express");
const Regisration = require("../../controllers/users/Registration.js");
const ErrorHandler = require("../../helpers/errorHandler.js");

const router = express.Router();

router.post("/", Regisration);

module.exports = router;
