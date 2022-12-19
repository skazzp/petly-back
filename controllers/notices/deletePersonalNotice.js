const { Notice } = require('../../service/schemas/Notice');
const { Users } = require('../../service/schemas/Users');

// const { errorHandler } = require('../../helpers/errorHandler');

const deletePersonalNotice = async (req, res) => {
  const { noticeId } = req.params;

  const isRemoved = await Notice.findByIdAndDelete(noticeId);

  if (!isRemoved) {
    // throw errorHandler(404, "Not found");
    return res.json({
      code: 409,
      message: 'Notice not found.',
    });
  }

  const users = await Users.find({ favorites: noticeId });
  users.forEach(async user => {
    const idx = user.favorites.indexOf(noticeId);
    user.favorites.splice(idx, 1);
    await user.save();
  });

  // TODO: clear favorite

  res.json({
    code: 200,
    status: 'success',
    message: 'Notice is removed',
  });
};

module.exports = deletePersonalNotice;
