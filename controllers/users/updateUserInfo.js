const { updateInfo } = require('../../service/modules/currentUser');

const updateUserInfo = async (req, res, next) => {
  try {
    const user = await updateInfo(req);

    if (!user) {
      res.json({
        status: 'success',
        code: 404,
        message: 'Not found',
      });
    } else {
      const { password, ...userData } = user._doc;
      res.json({
        status: 'success',
        code: 200,
        data: { ...userData },
        message: 'User information updated successfully',
      });
    }
  } catch (e) {
    console.error(e);
    next(e);
  }
};

module.exports = updateUserInfo;
