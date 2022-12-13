const { Notice } = require("../../service/schemas/Notice");
const { errorHandler } = require("../../helpers/errorHandler");

const getById = async (req, res) => {
  const { noticeId } = req.params;
  const notice = await Notice.findById(
    noticeId,
    "-createdAt -updatedAt"
  ).populate("owner", "email phone");

  if (!notice) {
    throw errorHandler(404, "Not found");
  }

  res.json({
    code: 200,
    status: "success",
    data: notice,
  });
};

module.exports = getById;
