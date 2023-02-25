const { cloudDelete } = require("../service/modules/cloudinaryService");

const cleanImgMiddleware = async (req, _, next) => {
  const { photoId } = req.body;
  if (!photoId) return next();

  try {
    await cloudDelete(photoId);
  } catch (err) {
    console.log(err);
  } finally {
    next();
  }
};

module.exports = cleanImgMiddleware;
