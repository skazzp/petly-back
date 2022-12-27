const express = require("express");
const router = express.Router();
const createPetController = require("../../controllers/pets/createPetCard");
const getAllPets = require("../../controllers/pets/getAllPets");
const removePet = require("../../controllers/pets/removePetCard");
const checkAuth = require("../../helpers/checkAuth.js");
const validator = require("../../helpers/validator.js");
const errorHandler = require("../../helpers/errorHandler.js");
const { schemaCreatePet } = require("../../helpers/validations.js");
const {
  uploadSingleMiddleware,
  upload,
  cleanImgMiddleware,
} = require("../../middlewares");

router.get("/", checkAuth, errorHandler(getAllPets));
router.post(
  "/",
  checkAuth,
  upload.single("image"),
  uploadSingleMiddleware,
  validator(schemaCreatePet),
  errorHandler(createPetController)
);
router.delete("/:id", checkAuth, cleanImgMiddleware, removePet);

module.exports = router;
