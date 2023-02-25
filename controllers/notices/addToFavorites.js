const { Users } = require('../../service/schemas/Users');

const addToFavorites = async (req, res) => {
  const { userId } = req;
  const { noticeId } = req.params;

  const user = await Users.findById(userId);

  const isAdded = user.favorites.includes(noticeId);
  if (isAdded) {
    return res.json({
      code: 409,
      message: 'Notice is already added.',
    });
  }
  user.favorites.push(noticeId);

  await user.save();

  return res.json({
    code: 200,
    status: 'success',
    message: 'Notice is added to favorites',
  });
};

module.exports = addToFavorites;
