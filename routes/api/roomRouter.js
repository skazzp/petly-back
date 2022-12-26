const express = require("express");
const router = express.Router();

const CreateRoom = require("../../controllers/rooms/createRoom");
const getRoomById = require("../../controllers/rooms/getRoom");

router.get("/:id", getRoomById);
router.post("/", CreateRoom);

module.exports = router;
