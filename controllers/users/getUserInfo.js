const getInfo = require("../../service/modules/getInfo");

const getUserInformation = async (req, res, next) => {
  const { id } = req.params;

  try {
    const result = await getInfo(id);
    if (!result) {
      res.json({
        status: "success",
        code: 404,
        message: "Not found",
      });
    } else {
      res.json({
        status: "success",
        code: 200,
        data: {
          user: {
            email: result.email,
            name: result.name,
            city: result.city,
            phone: result.phone,
            avatarURL: result.avatarURL,
            birthday: result.birthday,
          },
        },
        message: "user information",
      });
    }
  } catch (e) {
    console.error(e);
    next(e);
  }
};

module.exports = getUserInformation;
