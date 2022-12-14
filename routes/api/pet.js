const express = require("express");
const router = express.Router();
const createPetController = require("../../controllers/pets/createPetCard");
// const getAllPets = require("../../controllers/pets/getAllPets");
const removePet = require("../../controllers/pets/removePetCard");

// router.get("/:id", getAllPets);
router.post("/", createPetController);
router.delete("/:id", removePet);

module.exports = router;
