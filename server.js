const mongoose = require("mongoose");
const app = require("./app");
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const express = require("express");
require("dotenv").config();

const PORT = process.env.PORT || 3000;
const uriDb = process.env.MONGO_DB_URI;
mongoose.Promise = global.Promise;

const connection = mongoose.connect(uriDb, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.use(express.json());
const rooms = new Map();

app.get("/rooms/:id", (req, res) => {
  const roomId = req.params.id;
  const obj = rooms.has(roomId)
    ? {
        users: [...rooms.get(roomId).get("users").values()],
        messages: [...rooms.get(roomId).get("messages").values()],
      }
    : { users: [], messages: [] };
  res.json(obj);
});

app.post("/rooms", (req, res) => {
  const { roomId, userName } = req.body;
  console.log(roomId);
  if (!rooms.has(roomId)) {
    rooms.set(
      roomId,
      new Map([
        ["users", new Map()],
        ["messages", []],
      ])
    );
  }

  res.send();
});

// Подключаем клиенты
io.on("connection", (socket) => {
  socket.on("ROOM:JOIN", ({ roomId, userName }) => {
    socket.join(roomId);
    console.log(rooms);
    rooms.get(roomId).get("users").set(socket.id, userName);
    const users = [...rooms.get(roomId).get("users").values()];
    socket.in(roomId).emit("ROOM:SET_USERS", users);
  });
  // Выводим в консоль 'connection'
  console.log("connection", socket.id);

  socket.on("ROOM:NEW_MESSAGE", ({ roomId, userName, text }) => {
    const obj = {
      userName,
      text,
    };
    rooms.get(roomId).get("messages").push(obj);

    socket.to(roomId).emit("ROOM:NEW_MESSAGE", obj);
  });

  // Отправляем всем кто подключился сообщение привет
  // io.emit("hello", "Привет");
  // Что делать при случае дисконнекта
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

connection
  .then(() => {
    server.listen(PORT, function () {
      console.log(`Server running. Use our API on port: ${PORT}`);
    });
  })
  .catch((err) =>
    console.log(`Server not running. Error message: ${err.message}`)
  );
