const { errorHandler } = require("../../helpers/errorHandler");

const addToFavorites = async (req, res) => {
  const { user } = req;
  const { noticeId } = req.params;

  const isAdded = user.favorites.includes(noticeId);
  if (isAdded) {
    throw errorHandler(409, "Notice is already added.");
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
