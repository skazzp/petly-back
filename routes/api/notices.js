const { Router } = require("express");

const { controllerNotices } = require("../../controllers");
const {
  auth,
  uploadMiddleware,
  upload,
  cleanImgMiddleware,
} = require("../../middlewares");
// const {
//   schemaJoiValidator,
//   isValidId,
//   isValidCategory,
// } = require("../../validators");
const { schemasJoiNotice } = require("../../service/schemas/Notice");

const router = Router();

router.get("/", controllerNotices.getAll);

router.get(
  "/category/:category",
  // isValidCategory,
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

router.get("/personal", auth, controllerNotices.getPersonalNotices);

router.delete(
  "/:noticeId",
  // isValidId("noticeId"),
  auth,
  cleanImgMiddleware,
  controllerNotices.deletePersonalNotice
);

router.post(
  "/",
  auth,
  upload.single("image"),
  uploadMiddleware,
  // schemaJoiValidator(schemasJoiNotice.addSchema),
  controllerNotices.addPersonalNotice
);

module.exports = router;
