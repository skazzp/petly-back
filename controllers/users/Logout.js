const { updateUser, getUserById } = require("../../service/modules/auth");

const Logout = async (req, res, next) => {
  try {
    const user = await getUserById(req);
    await updateUser(user._id, { token: null });
    req.logout(function (err) {
      if (err) {
        return next(err);
      }
    });
    req.session.destroy(function (err) {
      if (err) {
        return next(err);
      }
    });
    return res.status(204).json({
      message: "success",
    });
  } catch (error) {
    res.status(417).json({
      status: "not successful",
    });
  }
};

module.exports = Logout;
