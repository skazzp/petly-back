const { createPet } = require("../../service/modules/pets");
const { schemaUserUpdate } = require("../../helpers/validations");

const createPetController = async (req, res) => {
  try {
    const validationResult = schemaUserUpdate.validate(req.body);
    if (validationResult.error) {
      return res.json({
        status: validationResult.error.details[0].message,
        code: 400,
        message: "data entered incorrectly",
      });
    }

    const newPet = await createPet(req);
    res.status(201).json(newPet);
  } catch (err) {
    console.log(err);
    res.status(409).json({ massage: "no create" });
  }
};

module.exports = createPetController;
