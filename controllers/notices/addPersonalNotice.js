const asyncHandler = require("express-async-handler");

const { Notice } = require("../../models");

const addPersonalNotice = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  const newNotice = await Notice.create({ ...req.body, owner: _id });

  res.status(201).json({
    code: 201,
    status: "success",
    data: newNotice,
  });
});

module.exports = addPersonalNotice;
