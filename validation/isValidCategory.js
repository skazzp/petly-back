const errorHandler = require('../helpers/errorHandler');
const { categories } = require('../service/schemas/Notice');

const isValidCategory = (req, res, next) => {
  const { category } = req.params;
  const isCorrect = categories.includes(category);

  if (!isCorrect) {
    const error = errorHandler(400, `${category} is wrong. Category must be one of ${categories}`);
    next(error);
  }
  next();
};

module.exports = isValidCategory;
