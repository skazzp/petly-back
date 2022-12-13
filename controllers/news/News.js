const { getAllNews } = require("../../service/modules/info");

const News = async (req, res, next) => {
  try {
    const news = await getAllNews();
    res.status(200).json(news);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "not found",
    });
  }
};

module.exports = News;
