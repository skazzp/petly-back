const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const authRouter = require("./routes/api/auth.js");
const userRouter = require("./routes/api/userInfo");
const infoRouter = require("./routes/api/info.js");
const petRouter = require("./routes/api/pet");

// const { STATIC_FILES_DIR } = require('./middlewares/avatarMiddleware');
const noticesRouter = require("./routes/api/notices");
// const authRouter = require('./routes/api/authRouter');
const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

// app.use('/avatars', express.static(STATIC_FILES_DIR));

app.use("/api/notices", noticesRouter);
app.use("/api/usersinfo", userRouter);
app.use("/api/users", authRouter);
app.use("/api/info", infoRouter);

app.use("/api/rooms", petRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = app;
