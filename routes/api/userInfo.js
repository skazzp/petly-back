const express = require("express");
const router = express.Router();
const getCurrentUser = require("../../controllers/users/getCurrentUser");
const updateUserInfo = require("../../controllers/users/updateUserInfo");
const checkAuth = require("../../helpers/checkAuth");

router.get("/", checkAuth, getCurrentUser);
router.patch("/update/:id", updateUserInfo);

module.exports = router;
