const { Users } = require('../schemas/Users');

const getInfo = async req => {
  const user = await Users.findOne({ _id: req.userId });
  return user;
};

const updateInfo = req => {
  let birthday = '';
  if (req.body.birthday && req.body.birthday !== '') {
    birthday = new Date(req.body.birthday).toISOString().split('T')[0];
  }
  console.log(123, req.body.photoURL);
  const user = Users.findByIdAndUpdate(
    { _id: req.userId },
    {
      email: req.body.email,
      name: req.body.name,
      phone: req.body.phone,
      city: req.body.city,
      avatarURL: req.body.photoURL,
      birthday: birthday,
    },
    { new: true }
  );
  return user;
};

module.exports = { getInfo, updateInfo };
