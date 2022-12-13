const { addUser, updateUser } = require("../../service/modules/auth");
const jwt = require("jsonwebtoken");

const Regisration = async (req, res, next) => {
  try {
    const user = await addUser(req);
    const token = jwt.sign(
      {
        _id: user._id,
      },
      "secret123",
      {
        expiresIn: "30d",
      }
    );
    console.log(token);

    await updateUser(user._id, { token: token });
    const { password, ...userData } = user._doc;

    res.status(201).json({ ...userData, token });
  } catch (err) {
    console.log(err);
    res.status(409).json({
      message: "Email in use",
    });
  }
};

module.exports = Regisration;
