const { Users } = require("../schemas/Users");

const updateInfo = (id, body) => {
  return Users.findByIdAndUpdate({ _id: id }, body, { new: true });
};

module.exports = updateInfo;
