const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
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
      required: [true, "Name is required"],
      default: "",
    },
    city: {
      type: String,
      required: [true, "Sity is required, format(syty, street)"],
      default: "",
    },
    phone: {
      type: String,
      unique: true,
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
      type: String,
      default: "",
    },
    favorites: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "notice",
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const Users = mongoose.model("users", userSchema);
module.exports = { Users };
