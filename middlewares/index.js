const auth = require("./auth");
const uploadMiddleware = require("./uploadMiddleware");
const upload = require("./multer");
const cleanImgMiddleware = require("./cleanImgMiddleware");
const uploadSingleMiddleware = require("./uploadSingleMiddleware");

module.exports = {
  auth,
  uploadMiddleware,
  upload,
  cleanImgMiddleware,
  uploadSingleMiddleware,
};
