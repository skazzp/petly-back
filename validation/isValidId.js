const { isValidObjectId } = require('mongoose');

const errorHandler = require('../helpers/errorHandler');

const isValidId = idParam => {
  return (req, res, next) => {
    const isCorrectId = isValidObjectId(req.params[idParam]);

    if (!isCorrectId) {
      const error = errorHandler(400, 'ID is not correct');
      next(error);
    }
    next();
  };
};

module.exports = isValidId;
