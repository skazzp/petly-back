const { Notice } = require("../../service/schemas/Notice");

const addPersonalNotice = async (req, res) => {
  const { _id } = req.user;
  const newNotice = await Notice.create({ ...req.body, owner: _id });

  res.status(201).json({
    code: 201,
    status: "success",
    data: newNotice,
  });
};

module.exports = addPersonalNotice;
