const Joi = require("joi");
const pattern = "^[a-zA-Z0-9]{3,30}$";
const schemaRegister = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().pattern(new RegExp(pattern)),
  phone: Joi.string().required(),
  city: Joi.string().required(),
  name: Joi.string().min(3).max(15).required(),
});

const schemaLogin = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().pattern(new RegExp(pattern)),
});

module.exports = {
  schemaRegister,
  schemaLogin,
};
