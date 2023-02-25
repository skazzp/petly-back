const { Notice } = require("../../service/schemas/Notice");

const getNameNotices = async (req, res) => {
 const { page = 1, limit = 12, text = "", category = "" } = req.query;
 const skip = (page - 1) * limit;

 const total = text
  ? await Notice.find({
     title: { $regex: new RegExp(text, "i") },
    }).count()
  : await Notice.find({}).count();
 if (!category) {
  const notice = await Notice.find(
   {
    title: { $regex: text, $options: "i" },
   },
   "-createdAt -updatedAt",
   { skip, limit }
  ).populate("owner", "email phone");
  if (!notice || notice.length === 0) {
   return res.json({
    code: 200,
    status: "success",
    data: [],
    page,
    totalPages: Math.ceil(total / limit),
   });
  }

  return res.json({
   code: 200,
   status: "success",
   data: notice,
   page,
   totalPages: Math.ceil(total / limit),
  });
 }
 if (category) {
  const notice = await Notice.find(
   {
    category: { $regex: category, $options: "i" },
    title: { $regex: text, $options: "i" },
   },
   "-createdAt -updatedAt",
   { skip, limit }
  ).populate("owner", "email phone");
  if (!notice || notice.length === 0) {
   return res.json({
    code: 200,
    status: "success",
    data: [],
    page,
    totalPages: Math.ceil(total / limit),
   });
  }

  return res.json({
   code: 200,
   status: "success",
   data: notice,
   page,
   totalPages: Math.ceil(total / limit),
  });
 }
};

module.exports = getNameNotices;
