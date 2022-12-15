const Pet = require("../../service/schemas/Pet");

const getAllPets = async (req, res) => {
  const { ownerId } = req.params;
  const pet = await Pet.findById(ownerId).populate("owner");

  res.status(200).json({
    status: "success",
    code: 200,
    message: "user pets",
    data: {
      pets: pet,
    },
  });
};
module.exports = getAllPets;
