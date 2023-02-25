const { getPets } = require("../../service/modules/pets");

const getAllPets = async (req, res) => {
  const pet = await getPets(req);

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
