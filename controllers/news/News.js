const { News } = require("../../service/schemas/News");

const getAllNews = async (req, res) => {
  const { page = 1, perPage = 6 } = req.query;
  const skip = (page - 1) * perPage;

  const results = await News.find().skip(skip).limit(perPage);
  if (!results) {
    return res.status(404).json({
      message: "Not found",
    });
  }
  res.json({
    code: 200,
    status: "success",
    message: "all news",
    data: { news: results },
  });
};
module.exports = getAllNews;
