const bcrypt = require("bcrypt");
const gravatar = require("gravatar");
const { Users } = require("../schemas/Users.js");

const addContact = async (req) => {
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
    birthday: req.body.birthday,
  });
  const user = await doc.save();
  return user;
};

module.exports = {
  addContact,
};
