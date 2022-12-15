const { Router } = require("express");

const { controllerNotices } = require("../../controllers");
const {
  auth,
  uploadMiddleware,
  upload,
  cleanImgMiddleware,
} = require("../../middlewares");
const checkAuth = require("../../helpers/checkAuth");
const {
  // schemaJoiValidator,
  //  isValidId,
  isValidCategory,
} = require("../../validation");

const { schemasJoiNotice } = require("../../service/schemas/Notice");

const router = Router();

router.get("/", controllerNotices.getAll);

router.get(
  "/category/:category",
  isValidCategory,
  controllerNotices.getByCategory
);

router.get(
  "/:noticeId",
  // isValidId("noticeId"),
  controllerNotices.getById
);

router.get(
  "/favorites/:noticeId",
  // isValidId("noticeId"),
  auth,
  controllerNotices.addToFavorites
);

router.get("/favorites", auth, controllerNotices.getFavorites);
router.delete(
  "/favorites/:noticeId",
  // isValidId("noticeId"),
  auth,
  controllerNotices.deleteFromFavorites
);

// router.get("/personal", auth, controllerNotices.getPersonalNotices);

router.delete(
  "/:noticeId",
  // isValidId("noticeId"),
  auth,
  cleanImgMiddleware,
  controllerNotices.deletePersonalNotice
);

router.post(
  "/",
  checkAuth,
  // upload.single("image"),
  // uploadMiddleware,
  // schemaJoiValidator(schemasJoiNotice.addSchema),
  controllerNotices.addPersonalNotice
);

module.exports = router;
