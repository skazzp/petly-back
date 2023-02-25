const { Notice } = require('../../service/schemas/Notice');

const getByCategory = async (req, res) => {
  const { category } = req.params;
  const { page = 1, limit = 12 } = req.query;
  const skip = (page - 1) * limit;

  const notices = await Notice.find({ category }, '-createdAt -updatedAt', {
    skip,
    limit,
  })
    .sort({ createdAt: -1 })
    .populate('owner', 'email phone');

  if (!notices) {
    res.json({
      code: 404,
      message: 'Not found',
    });
  }

  const total = await Notice.find({ category }).count();

  res.json({
    code: 200,
    status: 'success',
    data: notices,
    totalPages: Math.ceil(total / limit),
    page: page * 1,
  });
};

module.exports = getByCategory;
