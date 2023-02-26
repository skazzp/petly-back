const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const session = require("express-session");
const authRouter = require("./routes/api/auth.js");
const userRouter = require("./routes/api/userInfo");
const infoRouter = require("./routes/api/info.js");
const petRouter = require("./routes/api/pet");
const googleRouter = require("./routes/api/googleAuth");
const noticesRouter = require("./routes/api/notices");
const passport = require("passport");
const app = express();

app.use(
 session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
 })
);

app.use(passport.initialize());
app.use(passport.session());
const formatsLogger = app.get("env") === "development" ? "dev" : "true";
app.use(logger(formatsLogger));
app.use(
 cors({
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
 })
);

app.get("/", function (req, res) {
 res.send("Hello World");
});
app.get(
 "/fox",

 function (req, res) {
  res.send("Hello FoX");
 }
);
app.use(express.json());
// app.use("/", googleRouter);
app.use("/api/notices", noticesRouter);
app.use("/api/usersinfo", userRouter);
app.use("/api/users", authRouter);
app.use("/api/info", infoRouter);
app.use(
 "/api/pets",
 cors({
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
 }),
 petRouter
);

app.use((req, res) => {
 res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
 res.status(500).json({ message: err.message });
});

module.exports = app;
