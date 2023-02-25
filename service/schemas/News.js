const mongoose = require("mongoose");

const newsShema = mongoose.Schema(
  {
    title: {
      type: String,
    },
    url: {
      type: String,
    },
    description: {
      type: String,
    },

    date: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const News = mongoose.model("news", newsShema);
module.exports = { News };
