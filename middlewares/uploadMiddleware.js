const fs = require("fs/promises");
const { cloudUpload } = require("../service/modules/cloudinaryService");

const uploadMiddleware = async (req, res, next) => {
  if (!req.file) {
    delete req.body.image;
    req.body.photoURL =
      "http://res.cloudinary.com/dxxsrtjlb/image/upload/v1668769764/pets/pet_6375342f5b5c2cd38ef0320b_1668769763834.png";
    req.body.photoId = "";
    return next();
  }

  const { path: tempUpload, originalname } = req.file;
  const format = originalname.split(".").pop();
  const { _id } = req.user;

  const folder = req.baseUrl.split("/")[3];

  const id = `${folder.slice(0, -1) + "_" + _id + "_" + Date.now()}`;

  try {
    const { resultUrl, resultId } = await cloudUpload(
      tempUpload,
      id,
      folder,
      format
    );

    req.photo = {};
    folder === "users"
      ? ((req.photo.photoURL = resultUrl), (req.photo.photoId = resultId))
      : ((req.body.photoURL = resultUrl), (req.body.photoId = resultId));

    next();
  } catch (error) {
    throw error;
  } finally {
    await fs.unlink(req.file.path);
  }
};

module.exports = uploadMiddleware;
