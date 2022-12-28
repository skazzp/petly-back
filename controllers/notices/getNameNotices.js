const { Notice } = require("../../service/schemas/Notice");

const getNameNotices = async (req, res) => {
 const {  page = 1, limit = 12, text = "" } = req.query;
 const skip = (page - 1) * limit;

 const total = text
  ? await Notice.find({
     title: { $regex: new RegExp(text, "i") },
    }).count()
  : await Notice.find({}).count();

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
};

module.exports = getNameNotices;
