const mongoose = require("mongoose");

const sponsorsShema = mongoose.Schema(
  {
    title: {
      type: String,
    },
    url: {
      type: String,
    },
    addressUrl: {
      type: String,
    },

    imageUrl: {
      type: String,
    },
    address: {
      type: String,
    },
    workDays: {
      type: Array,
      default: [],
    },
    phone: {
      type: String,
    },

    email: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Sponsors = mongoose.model("sponsors", sponsorsShema);
module.exports = { Sponsors };
