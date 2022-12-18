const express = require('express');
const router = express.Router();
const getCurrentUser = require('../../controllers/users/getCurrentUser');
const updateUserInfo = require('../../controllers/users/updateUserInfo');
const checkAuth = require('../../helpers/checkAuth');
const { uploadMiddleware, upload } = require('../../middlewares');

router.get('/', checkAuth, getCurrentUser);
router.patch(
  '/update',
  checkAuth,
  upload.single('image'),
  (req, res, next) => {
    console.log(123);
    next();
  },
  uploadMiddleware,
  (req, res, next) => {
    console.log(444);
    next();
  },
  updateUserInfo
);

module.exports = router;
