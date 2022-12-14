const updateInfo = require("../../service/modules/updateInfo");

const updateUserInfo = async (req, res, next) => {
  try {
    const user = await updateInfo(req.params.id, req.body);

    if (!user) {
      res.json({
        status: "success",
        code: 404,
        message: "Not found",
      });
    } else {
      res.json({
        status: "success",
        code: 200,
        data: { user },
        message: "User information updated successfully",
      });
    }
  } catch (e) {
    console.error(e);
    next(e);
  }
};

module.exports = updateUserInfo;
