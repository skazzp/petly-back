const { addContact } = require("../../service/modules/auth");
const { Users } = require("../../service/schemas/Users");
const jwt = require("jsonwebtoken");

const Regisration = async (req, res, next) => {
  try {
    const user = await addContact(req);
    const token = jwt.sign(
      {
        _id: user._id,
      },
      "secret123",
      {
        expiresIn: "30d",
      }
    );

    await Users.findByIdAndUpdate(
      { _id: user._id },
      { token: token },
      { new: true }
    );
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
