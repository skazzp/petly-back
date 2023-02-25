const { Notice } = require("../../service/schemas/Notice");
const { Users } = require("../../service/schemas/Users");

const deletePersonalNotice = async (req, res) => {
  const { noticeId } = req.params;

  const isRemoved = await Notice.findByIdAndDelete(noticeId);

  if (!isRemoved) {
    return res.json({
      code: 409,
      message: "Notice not found.",
    });
  }

  const users = await Users.find({ favorites: noticeId });
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
