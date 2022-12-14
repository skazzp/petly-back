// const { createPet } = require("../../service/modules/createPet");
const Pet = require("../../service/schemas/Pet");

const createPetController = async (req, res) => {
  // В req.body должен быть owner: id
  const newPet = await Pet.create({ ...req.body });

  res.status(201).json({
    code: 201,
    status: "success",
    data: newPet,
  });
};

module.exports = createPetController;
