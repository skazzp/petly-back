const express = require("express");
const router = express.Router();
const getCurrentUser = require("../../controllers/users/getCurrentUser");
const updateUserInfo = require("../../controllers/users/updateUserInfo");
const checkAuth = require("../../helpers/checkAuth");
const { uploadSingleMiddleware, upload } = require("../../middlewares");

router.get("/", checkAuth, getCurrentUser);
router.patch(
  "/update",
  checkAuth,
  upload.single("image"),
  uploadSingleMiddleware,
  updateUserInfo
);

module.exports = router;
