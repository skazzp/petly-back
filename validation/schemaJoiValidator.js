const schemaJoiValidator = (schema) => {
  const func = (req, res, next) => {
    const validationResult = schema.validate(req.body);
    if (validationResult.error) {
      return res
        .status(400)
        .json({ message: validationResult.error.details[0].message });
    }
    next();
  };
  return func;
};

module.exports = schemaJoiValidator;
