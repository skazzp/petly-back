const { deletePet } = require("../../service/modules/pets");

const removePet = async (req, res, next) => {
  try {
    const contact = await deletePet(req.params.id);
    if (!contact) {
      res.json({
        status: "Not found",
        code: 404,
        message: "Not found",
      });
    } else {
      res.json({
        status: "success",
        code: 200,
        message: "Pet deleted",
      });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = removePet;
