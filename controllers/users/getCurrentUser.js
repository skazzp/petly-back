const { getInfo } = require("../../service/modules/currentUser");
const { getPets } = require("../../service/modules/pets");

const getUserInformation = async (req, res, next) => {
  try {
    const user = await getInfo(req);
    const userPets = await getPets(req);
    if (!user) {
      res.json({
        status: "success",
        code: 404,
        message: "Not found",
      });
    } else {
      const { password, ...userData } = user._doc;
      res.status(200).json({
        ...userData,
        userPets,
      });
    }
  } catch (e) {
    console.error(e);
    next(e);
  }
};

module.exports = getUserInformation;
