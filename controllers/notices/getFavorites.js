const getFavorites = async (req, res) => {
  const { user } = req;
  const { page = 1, limit = 100 } = req.query;
  // const skip = (page - 1) * limit;
  const populatedUser = await user.populate(
    "favorites",
    "-createdAt -updatedAt"
  );
  const { favorites } = populatedUser;
  const total = favorites.length;
  // const notices = favorites.slice(skip, skip + limit);
  // Якщо в БД у користувача в favorites є ID оголошення, а саме оголошеня видалено,
  // то в масив нічого не додається.
  res.json({
    code: 200,
    status: "success",
    data: favorites,
    totalPages: Math.ceil(total / limit),
    page: page * 1,
  });
};

module.exports = getFavorites;
