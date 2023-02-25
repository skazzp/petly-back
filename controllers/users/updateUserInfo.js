const { updateInfo } = require('../../service/modules/currentUser');

const updateUserInfo = async (req, res, next) => {
  try {
    const user = await updateInfo(req);

    if (!user) {
      res.json({
        status: 'success',
        code: 404,
        message: 'User not found',
      });
    } else {
      const { password, ...userData } = user._doc;
      res.status(200).json({
        ...userData,
      });
    }
  } catch (e) {
    console.error(e);
    next(e);
  }
};

module.exports = updateUserInfo;
