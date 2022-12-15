const { Notice } = require("../../service/schemas/Notice");

const getPersonalNotices = async (req, res) => {
  const { userId } = req;
  const { page = 1, limit = 12 } = req.query;
  // const skip = (page - 1) * limit;

  const notices = await Notice.find(
    { owner: userId },
    "-createdAt -updatedAt"
    // {
    // skip,
    // limit,
    // }
  );
  // const total = await Notice.find({ owner: userId }).count();

  res.json({
    code: 200,
    status: "success",
    data: notices,
    // totalPages: Math.ceil(total / limit),
    // page: page * 1,
  });
};

module.exports = getPersonalNotices;
