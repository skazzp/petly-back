const express = require("express");
const router = express.Router();

const checkAuth = require("../../helpers/checkAuth.js");

router.get("/");
router.post("/:id");

module.exports = router;
