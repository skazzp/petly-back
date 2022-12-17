const fs = require("fs/promises");
const { cloudUpload } = require("../service/modules/cloudinaryService");

const uploadMiddleware = async (req, res, next) => {
  if (!req.file) {
    req.body.photoURL =
      "https://res.cloudinary.com/dnkfxtdl2/image/upload/v1670963706/cld-sample.jpg";
    req.body.photoId = "";
    return next();
  }

  const { path: tempUpload, originalname } = req.file;
  const format = originalname.split(".").pop();
  const { userId } = req;

  const folder = req.baseUrl.split("/")[3];
  console.log("folder", folder);

  const id = `${userId + "_" + Date.now()}`;

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
    console.log(error);
  } finally {
    await fs.unlink(req.file.path);
  }
};

module.exports = uploadMiddleware;
