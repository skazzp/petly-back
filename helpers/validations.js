const Joi = require("joi");
const pattern = "^[a-zA-Z0-9]{3,30}$";
const schemaRegister = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().pattern(new RegExp(pattern)),
  phone: Joi.string().required(),
  city: Joi.string().required(),
  name: Joi.string().min(2).max(16).required(),
  birthday: Joi.string(),
});

const schemaLogin = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().pattern(new RegExp(pattern)),
});

const schemaUserUpdate = Joi.object({
  email: Joi.string().email(),
  phone: Joi.string().required(),
  city: Joi.string().required(),
  name: Joi.string().min(2).max(16),
  birthday: Joi.string(),
});

const schemaCreatePet = Joi.object({
  breed: Joi.string().min(2).max(16).required(),
  photoURL: Joi.string().required(),
  photoId: Joi.string().allow(""),
  name: Joi.string().min(2).max(16).required(),
  comments: Joi.string().min(8).max(120),
  birthday: Joi.string(),
});

module.exports = {
  schemaRegister,
  schemaLogin,
  schemaUserUpdate,
  schemaCreatePet,
};
