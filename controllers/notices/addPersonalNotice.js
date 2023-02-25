const { Notice } = require('../../service/schemas/Notice');

const addPersonalNotice = async (req, res) => {
  let newNotice = await Notice.create({ ...req.body, owner: req.userId });

  newNotice = await newNotice.populate('owner', 'email phone');

  res.status(201).json({
    code: 201,
    status: 'success',
    data: newNotice,
  });
};

module.exports = addPersonalNotice;
