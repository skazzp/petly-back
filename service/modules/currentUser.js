const { Users } = require("../schemas/Users");

const getInfo = async (req) => {
  const user = await Users.findOne({ _id: req.userId });
  return user;
};

const updateInfo = (req) => {
  const { birthday, name, email, photoURL, phone, city } = req.body;
  let userBirthday = "";
  if (birthday && birthday !== "") {
    userBirthday = new Date(birthday).toISOString().split("T")[0];
  }
  const user = Users.findByIdAndUpdate(
    { _id: req.userId },
    {
      email: email,
      name: name,
      phone: phone,
      city: city,
      avatarURL: photoURL,
      birthday: userBirthday,
    },
    { new: true }
  );
  return user;
};

module.exports = { getInfo, updateInfo };
