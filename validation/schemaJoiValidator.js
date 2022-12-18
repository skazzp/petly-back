// const errorHandler = require('../helpers/errorHandler');

const schemaJoiValidator = (schema) => {
  const func = (req, res, next) => {
    const validationResult = schema.validate(req.body);
    console.log("validationResult--->>>>>", validationResult.error);
    if (validationResult.error) {
      // const error = errorHandler(400, validationResult.error.details[0].message);
      // console.log(validationResult.error.details[0].message);
      return res
        .status(400)
        .json({ message: validationResult.error.details[0].message });
    }
    next();
  };
  return func;
};

module.exports = schemaJoiValidator;
