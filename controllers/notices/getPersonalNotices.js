const { Notice } = require("../../service/schemas/Notice");

const getPersonalNotices = async (req, res) => {
  const { userId } = req;

  const notices = await Notice.find({ owner: userId }, "-createdAt -updatedAt");

  res.json({
    code: 200,
    status: "success",
    data: notices,
  });
};

module.exports = getPersonalNotices;
