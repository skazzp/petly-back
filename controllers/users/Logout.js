const { updateUser, getUserById } = require("../../service/modules/auth");

const Logout = async (req, res, next) => {
  try {
    const user = await getUserById(req);
    await updateUser(user._id, { token: null });
    res.json({
      message: "success",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "not successful",
    });
  }
};

module.exports = Logout;
