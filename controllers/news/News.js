const { News } = require("../../service/schemas/News");

const getAllNews = async (req, res) => {
 const { page = 1, perPage = 6 } = req.query;
 const skip = (page - 1) * perPage;
 const { text } = req.query;
 const totalNews = await News.find().count();
 const results = await News.find().skip(skip).limit(perPage).sort({ date: -1 });
 if (!results) {
  return res.status(404).json({
   message: "Not found",
  });
 }

 const total = await News.find({
  title: { $regex: new RegExp(text, "i") },
 }).count();

 res.json({
  code: 205,
  status: "success",
  message: "all news",
  totalNews,
  data: { news: results, totalPages: Math.ceil(total / perPage), page },
 });
};
// /////////////////////////////////////////////////////////////////
const getTitelNews = async (req, res) => {
 const { page = 1, perPage = 6 } = req.query;
 const skip = (page - 1) * perPage;
 const { text } = req.query;
 const results = await News.find({
  title: { $regex: text, $options: "i" },
 })
  .skip(skip)
  .limit(perPage)
  .sort({ date: -1 });
 if (!results) {
  return res.status(404).json({
   message: "Not found",
  });
 }
 if (results.length === 0) {
  return res.json({
   code: 206,
   status: "success",
   data: null,
  });
 }

 const total = await News.find({
  title: { $regex: new RegExp(text, "i") },
 }).count();

 return res.json({
  code: 210,
  status: "success",
  data: { news: results, totalPages: Math.ceil(total / perPage), page },
 });
};

module.exports = { getAllNews, getTitelNews };
