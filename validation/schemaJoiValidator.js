const { errorHandler } = require("../helpers/errorHandler");

const schemaJoiValidator = (schema) => {
  const func = (req, _, next) => {
    const validationResult = schema.validate(req.body);

    if (validationResult.error) {
      const error = errorHandler(
        400,
        validationResult.error.details[0].message
      );
      next(error);
    }
    next();
  };
  return func;
};

module.exports = schemaJoiValidator;
