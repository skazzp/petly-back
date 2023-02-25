const { updateUser, getUserOne } = require("../../service/modules/auth");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const Login = async (req, res, next) => {
  try {
    const user = await getUserOne(req);

    const token = jwt.sign(
      {
        _id: user._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "30d",
      }
    );

    await updateUser(user._id, { token: token });
    const { password, ...userData } = user._doc;

    res.status(201).json({ ...userData, token });
  } catch (err) {
    console.log(err);
    res.status(401).json({
      message: "Email or password is wrong",
    });
  }
};

module.exports = Login;
