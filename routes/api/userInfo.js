const express = require("express");
const router = express.Router();
const getUserInfo = require("../../controllers/users/getUserInfo");
const updateUserInfo = require("../../controllers/users/updateUserInfo");

router.get("/:id", getUserInfo);
router.patch("/update/:id", updateUserInfo);

module.exports = router;