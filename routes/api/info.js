const express = require("express");
const Sponsors = require("../../controllers/friends/Sponsors.js");
const getAllNews = require("../../controllers/news/News.js");
// const checkAuth = require('../../helpers/checkAuth.js');
const errorHandler = require("../../helpers/errorHandler.js");

const router = express.Router();

router.get("/friends", errorHandler(Sponsors));
router.get("/news", errorHandler(getAllNews));

module.exports = router;
