const { Users } = require("../schemas/Users");

const getInfo = (req) => {
  return Users.findOne({ _id: req.userId });
};

module.exports = getInfo;
