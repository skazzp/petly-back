const mongoose = require("mongoose");

const userShema = mongoose.Schema(
  {
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    name: {
      type: String,
    },
    city: {
      type: String,
    },
    phone: {
      type: String,
    },
    token: {
      type: String,
      default: null,
    },
    avatarURL: {
      type: String,
      default: "",
    },
    birthday: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

const Users = mongoose.model("users", userShema);
module.exports = { Users };
