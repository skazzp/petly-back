const asyncHandler = require("express-async-handler");

const { Notice } = require("../../models");
const { RequestError } = require("../../helpers");

const getByCategory = asyncHandler(async (req, res) => {
  const { category } = req.params;
  const { page = 1, limit = 12 } = req.query;
  const skip = (page - 1) * limit;

  const notices = await Notice.find({ category }, "-createdAt -updatedAt", {
    skip,
    limit,
  }).populate("owner", "email phone");

  if (!notices) {
    throw RequestError(404, "Not found");
  }

  const total = await Notice.find({ category }).count();

  res.json({
    code: 200,
    status: "success",
    data: notices,
    totalPages: Math.ceil(total / limit),
    page: page * 1,
  });
});

module.exports = getByCategory;
