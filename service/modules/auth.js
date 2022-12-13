const bcrypt = require("bcrypt");
const gravatar = require("gravatar");
const { Users } = require("../schemas/Users.js");
const getUserOne = async (req) => {
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
  const avatar = await gravatar.url(req.body.email);

  const doc = new Users({
    email: req.body.email,
    name: req.body.fullName,
    password: hash,
    city: req.body.city,
    avatarURL: avatar,
    birthday: new Date(req.body.birthday),
  });
  const user = await doc.save();
  return user;
};

const updateUser = async (id, token) => {
  await Users.findByIdAndUpdate({ _id: id }, { token: token }, { new: true });
};

module.exports = {
  addUser,
  updateUser,
  getUserOne,
};
