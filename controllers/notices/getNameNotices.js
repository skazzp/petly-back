const { Notice } = require("../../service/schemas/Notice");

const getNameNotices = async (req, res) => {
  const { text } = req.query;
  const notice = await Notice.find({
    title: { $regex: text, $options: "i" },
  }).populate("owner", "email phone");
  if (!notice || notice.length === 0) {
    res.json({
      code: 404,
      message: "no search results",
    });
    return;
  }

  res.json({
    code: 200,
    status: "success",
    data: notice,
  });
};

module.exports = getNameNotices;
