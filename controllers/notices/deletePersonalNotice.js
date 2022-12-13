const { Notice, User } = require("../../service/schemas/Notice");
const { errorHandler } = require("../../helpers/errorHandler");

const deletePersonalNotice = async (req, res) => {
  const { noticeId } = req.params;

  const isRemoved = await Notice.findByIdAndDelete(noticeId);

  if (!isRemoved) {
    throw errorHandler(404, "Not found");
  }

  // Зачистити ІД в обраних серед юзерів ?
  const users = await User.find({ favorites: noticeId });
  users.forEach(async (user) => {
    const idx = user.favorites.indexOf(noticeId);
    user.favorites.splice(idx, 1);
    await user.save();
  });

  res.json({
    code: 200,
    status: "success",
    message: "Notice is removed",
  });
};

module.exports = deletePersonalNotice;
