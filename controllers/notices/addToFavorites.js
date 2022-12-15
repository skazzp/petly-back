const { errorHandler } = require("../../helpers/errorHandler");
const { Users } = require("../../service/schemas/Users");

const addToFavorites = async (req, res) => {
  const { userId } = req;
  const { noticeId } = req.params;

  const user = await Users.findById(userId);
  console.log(user);

  const isAdded = user.favorites.includes(noticeId);
  if (isAdded) {
    res.json({
      code: 409,
      message: "Notice is already added.",
    });
  }
  user.favorites.push(noticeId);

  await user.save();

  res.json({
    code: 200,
    status: "success",
    message: "Notice is added to favorites",
  });
};

module.exports = addToFavorites;
