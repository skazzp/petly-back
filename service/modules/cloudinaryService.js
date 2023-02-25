const cloudinary = require('cloudinary').v2;
require('dotenv').config();

cloudinary.config({
  cloud_name: 'dnkfxtdl2',
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const cloudUpload = async (uploadPath, id, folder, format) => {
  const resultOfUpload = await cloudinary.uploader.upload(uploadPath, {
    public_id: id,
    folder,
    format,
    transformation: { width: 350, height: 350, crop: 'fill' },
  });
  const resultUrl = resultOfUpload.secure_url;
  const resultId = resultOfUpload.public_id;
  return { resultUrl, resultId };
};

const cloudDelete = async photoId => {
  await cloudinary.uploader.destroy(photoId);
};

module.exports = { cloudUpload, cloudDelete };
