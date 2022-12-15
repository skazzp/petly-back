const { Users } = require("../schemas/Users");

const getInfo = async (req) => {
  const user = await Users.findOne({ _id: req.userId });
  return user;
};

const updateInfo = (id, body) => {
  return Users.findByIdAndUpdate({ _id: id }, body, { new: true });
};

module.exports = { getInfo, updateInfo };
