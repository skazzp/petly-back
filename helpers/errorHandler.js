function errorHandler(request) {
  return async (req, res, next) => {
    try {
      await request(req, res, next);
    } catch (error) {
      console.log(error);
      next(error);
    }
  };
}

module.exports = errorHandler;
