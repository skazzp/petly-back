const cloudinary = require("cloudinary").v2;

const path = require("path");
const configPath = path.join(__dirname, "..", "config", ".env");
require("dotenv").config({ path: configPath });

cloudinary.config({
  cloud_name: "dnkfxtdl2",
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
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
