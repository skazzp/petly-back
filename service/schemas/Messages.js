const mongoose = require("mongoose");
const roomsSchema = new mongoose.Schema({
  roomId: {
    type: String,
    require: true,
  },
  users: {
    type: Array,
    require: true,
  },
  messages: {
    type: Array,
    require: true,
  },
});

const Rooms = mongoose.model("rooms", roomsSchema);
module.exports = Rooms;
