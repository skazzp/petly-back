const Pet = require("../schemas/Pet");

const deletePet = async (id) => {
  return await Pet.findByIdAndRemove({ _id: id });
};

const createPet = async (req) => {
  let birthday = "";
  if (req.body.birthday && req.body.birthday !== "") {
    birthday = new Date(req.body.birthday).toISOString().split("T")[0];
  }
  const doc = new Pet({
    name: req.body.name,
    breed: req.body.breed,
    photoURL: req.body.photoURL,
    photoId: req.body.photoId,
    comments: req.body.comments,
    birthday: birthday,
    owner: req.userId,
  });
  const pet = await doc.save();
  return pet;
};

const getPets = async (req) => {
  const pets = await Pet.find({ owner: req.userId });
  return pets;
};

module.exports = { deletePet, createPet, getPets };
