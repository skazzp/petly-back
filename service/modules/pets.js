const Pet = require("../schemas/Pet");

const deletePet = async (id) => {
  return await Pet.findByIdAndRemove({ _id: id });
};

const createPet = async (req) => {
  const { birthday, name, breed, photoURL, photoId, comments } = req.body;
  let petBirthday = "";
  if (birthday && birthday !== "") {
    petBirthday = new Date(birthday).toISOString().split("T")[0];
  }
  const doc = new Pet({
    name: name,
    breed: breed,
    photoURL: photoURL,
    photoId: photoId,
    comments: comments,
    birthday: petBirthday,
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
