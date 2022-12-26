// const fs = require('fs/promises');
// const { CloudinaryStorage } = require("multer-storage-cloudinary");
const { cloudUpload } = require("../service/modules/cloudinaryService");

const uploadMiddleware = async (req, res, next) => {
  const folder = req.baseUrl.split("/")[2];
  if (!req.files) {
    if (folder === "notices") {
      req.body.photoURL =
        "https://res.cloudinary.com/dnkfxtdl2/image/upload/v1671266714/Catdog_uhpgig.jpg";
    }
    if (folder === "users") {
      req.body.photoURL =
        "https://res.cloudinary.com/dnkfxtdl2/image/upload/v1671447406/users/avatar-person_zinbi4.svg";
    }
    if (folder === "pets") {
      req.body.photoURL =
        "https://res.cloudinary.com/dnkfxtdl2/image/upload/v1671446506/users/dogg_uk5gvs.jpg";
    }
    req.body.photoId = "";
    return next();
  }

  // const { path: tempUpload, originalname } = req.files;
  //  const format = originalname.split(".").pop();
  // const { userId } = req;
  // // const folder = 'users';
  // const id = `${userId + "_" + Date.now()}`;

  try {
    //   const { resultUrl, resultId } = await cloudUpload(
    //     tempUpload,
    //     id,
    //     folder,
    //     format
    //   );

    //   req.body.photoURL = resultUrl;
    //   req.body.photoId = resultId;
    if (req.method === "POST") {
      const urls = [];
      // const ids = [];
      const files = req.files;
      const { userId } = req;
      for (const file of files) {
        const item = {};
        const { path: tempUpload, originalname } = file;
        const id = `${userId + "_" + Date.now()}`;
        const format = originalname.split(".").pop();
        const { resultUrl, resultId } = await cloudUpload(
          tempUpload,
          id,
          folder,
          format
        );
        item.photoURL = resultUrl;
        item.photoId = resultId;
        urls.push(item);
        // ids.push(resultId);

        // req.body.photoURL = urls;
        // req.body.photoId = ids;
        req.body.img = urls;
        console.log("item----->>>>>>", item);
      }
      console.log(urls);
    }
    next();
  } catch (error) {
    console.log(error);
  }
  // пофиксить, чтоб файл удалялся на клаудинари в тмп
  // finally {
  //    await fs.unlink(req.file.path);
  // }
};

module.exports = uploadMiddleware;
