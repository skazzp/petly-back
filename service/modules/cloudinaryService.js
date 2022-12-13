const cloudinary = require("cloudinary").v2;
const fs = require("fs/promises");

const path = require("path");
const configPath = path.join(__dirname, "..", "config", ".env");
require("dotenv").config({ path: configPath });

const api_key = process.env.CLOUDINARY_API_KEY;
const api_secret = process.env.CLOUDINARY_API_SECRET;

cloudinary.config({
  cloud_name: "dxxsrtjlb",
  api_key,
  api_secret,
});

const cloudUpload = async (uploadPath, public_id, folder, format) => {
  try {
    const resultOfUpload = await cloudinary.uploader.upload(uploadPath, {
      public_id,
      folder,
      format,
      transformation: { width: 350, height: 350, crop: "fill" },
    });

    const resultUrl = resultOfUpload.url;
    const resultId = resultOfUpload.public_id;

    return { resultUrl, resultId };
  } catch (error) {
    throw error;
  }
};

const cloudDelete = async (photoId) => {
  try {
    await cloudinary.uploader.destroy(photoId);
  } catch (error) {
    throw error;
  }
};

module.exports = { cloudUpload, cloudDelete };
