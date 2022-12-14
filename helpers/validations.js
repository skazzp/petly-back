const Joi = require("joi");

const schemaRegister = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
  phone: Joi.string().required(),
  city: Joi.string().required(),
  name: Joi.string().min(3).max(15).required(),
});

const schemaLogin = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
});

module.exports = {
  schemaRegister,
  schemaLogin,
};
