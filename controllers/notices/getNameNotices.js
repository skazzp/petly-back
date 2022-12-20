const { Notice } = require('../../service/schemas/Notice');

const getNameNotices = async (req, res) => {
  const { query: text } = req.query;
  console.log(req.query);
  const notice = await Notice.find({
    title: { $regex: text, $options: 'i' },
  }).populate('owner', 'email phone');
  if (!notice || notice.length === 0) {
    return res.json({
      code: 404,
      message: 'no search results',
    });
  }

  return res.json({
    code: 200,
    status: 'success',
    data: notice,
  });
};

module.exports = getNameNotices;
