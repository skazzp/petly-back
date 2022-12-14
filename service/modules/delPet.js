const Pet = require("../../service/schemas/Pet");

const deletePet = (id) => {
  return Pet.findByIdAndRemove({ _id: id });
};

module.exports = deletePet;
