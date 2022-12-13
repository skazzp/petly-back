const express = require('express');
const Regisration = require('../../controllers/users/Registration.js');
const errorHandler = require('../../helpers/errorHandler.js');

const router = express.Router();

router.post('/', errorHandler(Regisration));

module.exports = router;
