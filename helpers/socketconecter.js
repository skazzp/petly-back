const rooms = require("../helpers/Rooms");

const socketConector = (io) => {
  io.on("connection", (socket) => {
    socket.on("ROOM:JOIN", ({ roomId, userName }) => {
      socket.join(roomId);
      rooms.get(roomId).get("users").set(socket.id, userName);
      const users = [...rooms.get(roomId).get("users").values()];
      console.log(users);
      socket.in(roomId).emit("ROOM:SET_USERS", users);

      const obj = {
        userName: "Petly-Chat",
        text: "New user in chat / Welcome",
      };
      socket.to(roomId).emit("ROOM:NEW_MESSAGE", obj);
    });

    console.log("connection", socket.id);

    //
    socket.on("ROOM:NEW_MESSAGE", ({ roomId, userName, text }) => {
      const obj = {
        userName,
        text,
      };
      rooms.get(roomId).get("messages").push(obj);

      socket.to(roomId).emit("ROOM:NEW_MESSAGE", obj);
    });

    //
    socket.on("disconnect", () => {
      rooms.forEach((value, roomId) => {
        if (value.get("users").delete(socket.id)) {
          const users = [...value.get("users").values()];
          socket.broadcast.to(roomId).emit("ROOM:SET_USERS", users);
        }
      });
    });

    console.log("disconnected");
  });
};
module.exports = socketConector;
