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
  isValidId,
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

router.get("/favorites", checkAuth, controllerNotices.getFavorites);
router.get(
  "/favorites/:noticeId",
  isValidId("noticeId"),
  checkAuth,
  controllerNotices.addToFavorites
);

router.delete(
  "/favorites/:noticeId",
  isValidId("noticeId"),
  checkAuth,
  controllerNotices.deleteFromFavorites
);

router.get("/personal", checkAuth, controllerNotices.getPersonalNotices);

router.get("/:noticeId", isValidId("noticeId"), controllerNotices.getById);
router.delete(
  "/:noticeId",
  isValidId("noticeId"),
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
