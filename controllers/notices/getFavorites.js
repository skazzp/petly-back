const { Users } = require("../../service/schemas/Users");

const getFavorites = async (req, res) => {
  const { userId } = req;
  const { page = 1, limit = 100 } = req.query;
  const user = await Users.findById(userId);

  const populatedUser = await user.populate(
    "favorites",
    "-createdAt -updatedAt"
  );
  const { favorites } = populatedUser;
  const total = favorites.length;
  res.json({
    code: 200,
    status: "success",
    data: favorites,
    totalPages: Math.ceil(total / limit),
    page: page * 1,
  });
};

module.exports = getFavorites;
