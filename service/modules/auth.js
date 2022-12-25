const bcrypt = require("bcrypt");
const gravatar = require("gravatar");
const { Users } = require("../schemas/Users.js");
const jwt = require("jsonwebtoken");
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

const addOauthUser = async (profile) => {
  const { picture, placesLived, email, displayName } = profile;
  const userByEmail = await Users.findOne({ email: email });
  if (!userByEmail) {
    // const passwordHash = "unauthorizedUser";
    // const salt = await bcrypt.genSalt(10);
    // const hash = await bcrypt.hash(passwordHash, salt);
    const doc = new Users({
      email: email,
      name: displayName,
      phone: "Petly-phone",
      password: null,
      city: placesLived ?? "Petly-city",
      avatarURL: picture,
      // birthday: new Date(req.body.birthday),
      token: token,
    });
    const user = await doc.save();
  } else {
    const token = jwt.sign(
      {
        _id: userByEmail._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "30d",
      }
    );
    userByEmail.token = token;
    await userByEmail.save();
  }
};

module.exports = {
  addUser,
  updateUser,
  getUserOne,
  getUserById,
  addOauthUser,
};
