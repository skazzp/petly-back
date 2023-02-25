const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");

require("dotenv").config();

cloudinary.config({
  cloud_name: "dnkfxtdl2",
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "tmp",
    public_id: (req, file) => uuidv4(),
  },
});

const upload = multer({ storage: storage });
module.exports = upload;
