const { Sponsors } = require("../schemas/Sponsors");
const { News } = require("../schemas/News");

const getAllSponsors = async () => {
  const sponsors = await Sponsors.find();

  if (!sponsors) {
    return res.status(404).json({
      message: "Not found",
    });
  }
  return sponsors;
};

const getAllNews = async () => {
  const news = await News.find();

  if (!news) {
    return res.status(404).json({
      message: "Not found",
    });
  }
  return news;
};
module.exports = {
  getAllSponsors,
  getAllNews,
};
