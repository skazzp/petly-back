const { isValidObjectId } = require('mongoose');

const isValidId = idParam => {
  return (req, res, next) => {
    const isCorrectId = isValidObjectId(req.params[idParam]);
    console.log(isCorrectId);
    if (!isCorrectId) {
      return res.json({
        code: 417,
        message: 'Expectation failed',
      });
    }
  };
};

module.exports = isValidId;
