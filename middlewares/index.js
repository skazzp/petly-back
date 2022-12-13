const auth = require("./auth");
const uploadMiddleware = require("./uploadMiddleware");
const upload = require("./multer");
const cleanImgMiddleware = require("./cleanImgMiddleware");

module.exports = {
  auth,
  uploadMiddleware,
  upload,
  cleanImgMiddleware,
};
