const { Users } = require("../../service/schemas/Users");

const getFavorites = async (req, res) => {
  console.log("error");
  const { userId } = req;
  const { page = 1, limit = 100 } = req.query;
  // const skip = (page - 1) * limit;
  const user = await Users.findById(userId);

  const populatedUser = await user.populate(
    "favorites",
    "-createdAt -updatedAt"
  );
  console.log(user);
  console.log(populatedUser);
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
