const rooms = require("../../helpers/Rooms");

const getRoomById = (req, res) => {
  try {
    const roomId = req.params.id;
    const obj = rooms.has(roomId)
      ? {
          users: [...rooms.get(roomId).get("users").values()],
          messages: [...rooms.get(roomId).get("messages").values()],
        }
      : { users: [], messages: [] };
    res.json(obj);
  } catch (error) {
    console.log(error);
  }
};

module.exports = getRoomById;
