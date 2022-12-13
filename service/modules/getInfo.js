const { Users } = require("../schemas/Users");

const getInfo = (id) => {
  return Users.findOne({ _id: id });
};

module.exports = getInfo;
