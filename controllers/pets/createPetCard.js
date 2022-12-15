const { createPet } = require("../../service/modules/pets");

const createPetController = async (req, res) => {
  try {
    const newPet = await createPet(req);

    res.status(201).json(newPet);
  } catch (err) {
    console.log(err);
    res.status(409).json({ massage: "no create" });
  }
};

module.exports = createPetController;
