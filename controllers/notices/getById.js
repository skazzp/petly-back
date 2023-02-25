const { Notice } = require("../../service/schemas/Notice");

const getById = async (req, res) => {
  const { noticeId } = req.params;
  const notice = await Notice.findById(
    noticeId,
    "-createdAt -updatedAt"
  ).populate("owner", "email phone");

  if (!notice) {
    res.json({
      code: 404,
      message: "Not found",
    });
    return;
  }

  res.json({
    code: 200,
    status: "success",
    data: notice,
  });
};

module.exports = getById;
