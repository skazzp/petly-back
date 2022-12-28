const { Router } = require("express");

const { controllerNotices } = require("../../controllers");
const {
  uploadMiddleware,
  upload,
  cleanImgMiddleware,
} = require("../../middlewares");
const checkAuth = require("../../helpers/checkAuth");
const {
  schemaJoiValidator,
  isValidId,
  isValidCategory,
} = require("../../validation");

const { addSchema } = require("../../service/schemas/Notice");
const getNameNotices = require("../../controllers/notices/getNameNotices");

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
  "/favorites/delete/:noticeId",
  isValidId("noticeId"),
  checkAuth,
  controllerNotices.deleteFromFavorites
);

router.get("/personal", checkAuth, controllerNotices.getPersonalNotices);
router.get(
  "/search",
  getNameNotices
);

router.get("/:noticeId", isValidId("noticeId"), controllerNotices.getById);

router.delete(
  "/delete/:noticeId",
  isValidId("noticeId"),
  checkAuth,
  cleanImgMiddleware,
  controllerNotices.deletePersonalNotice
);

router.post(
  "/create",
  checkAuth,
  upload.array("image"),
  uploadMiddleware,
  schemaJoiValidator(addSchema),
  controllerNotices.addPersonalNotice
);

module.exports = router;
