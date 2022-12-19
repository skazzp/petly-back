const bcrypt = require("bcrypt");
const gravatar = require("gravatar");
const { Users } = require("../schemas/Users.js");
const getUserOne = async (req, res) => {
  const user = await Users.findOne({ email: req.body.email });
  if (!user) {
    return res.status(401).json({
      message: "Email or password is wrong",
    });
  }
  const isValidPass = await bcrypt.compare(req.body.password, user.password);
  if (!isValidPass) {
    return res.status(401).json({
      message: "Email or password is wrong",
    });
  }
  return user;
};

const addUser = async (req) => {
  const passwordHash = req.body.password;
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(passwordHash, salt);
  const avatar =
    "https://res.cloudinary.com/dnkfxtdl2/image/upload/v1671447406/users/avatar-person_zinbi4.svg";

  const doc = new Users({
    email: req.body.email,
    name: req.body.name,
    phone: req.body.phone,
    password: hash,
    city: req.body.city,
    avatarURL: avatar,
    // birthday: new Date(req.body.birthday),
  });
  const user = await doc.save();
  return user;
};

const getUserById = async (req, res) => {
  const user = await Users.findById({ _id: req.userId });
  if (!user) {
    return res.status(401).json({
      message: "Not authorized",
    });
  }
  return user;
};

const updateUser = async (id, body) => {
  await Users.findByIdAndUpdate({ _id: id }, body, { new: true });
};

module.exports = {
  addUser,
  updateUser,
  getUserOne,
  getUserById,
};
