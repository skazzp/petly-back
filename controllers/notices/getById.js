const asyncHandler = require("express-async-handler");

const { Notice } = require("../../models");
const { RequestError } = require("../../helpers");

const getById = asyncHandler(async (req, res) => {
  const { noticeId } = req.params;
  const notice = await Notice.findById(
    noticeId,
    "-createdAt -updatedAt"
  ).populate("owner", "email phone");

  if (!notice) {
    throw RequestError(404, "Not found");
  }

  res.json({
    code: 200,
    status: "success",
    data: notice,
  });
});

module.exports = getById;
