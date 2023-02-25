const { Schema, model } = require("mongoose");

const { ObjectId } = Schema.Types;

const petSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please, add a name"],
    },
    birthday: {
      type: String,
      default: Date.now(),
    },
    breed: {
      type: String,
      default: "no breed",
    },
    photoURL: {
      type: String,
      default: "",
    },
    photoId: {
      type: String,
      default: "",
    },
    comments: {
      type: String,
      default: "",
    },
    owner: {
      type: ObjectId,
      ref: "users",
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const Pet = model("pet", petSchema);

module.exports = Pet;
