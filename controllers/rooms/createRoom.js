const rooms = require("../../helpers/Rooms");

const CreateRoom = async (req, res) => {
  try {
    const { roomId, userName } = req.body;
    if (!rooms.has(roomId)) {
      rooms.set(
        roomId,
        new Map([
          ["users", new Map()],
          ["messages", []],
        ])
      );
    }
    console.log(rooms);
    res.send(rooms);
  } catch (error) {
    console.log(error);
  }
};
module.exports = CreateRoom;
