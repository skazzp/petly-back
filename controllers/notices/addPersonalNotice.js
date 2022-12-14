const { Notice } = require("../../service/schemas/Notice");

const addPersonalNotice = async (req, res) => {
  const newNotice = await Notice.create({ ...req.body, owner: req.userId });

  res.status(201).json({
    code: 201,
    status: "success",
    data: newNotice,
  });
};

module.exports = addPersonalNotice;
