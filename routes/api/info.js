const express = require("express");
const Sponsors = require("../../controllers/friends/Sponsors.js");
const {getAllNews, getTitelNews} = require("../../controllers/news/News.js");
const errorHandler = require("../../helpers/errorHandler.js");

const router = express.Router();

router.get("/friends", errorHandler(Sponsors));
router.get("/news", errorHandler(getAllNews));
router.get("/news/search", errorHandler(getTitelNews));

module.exports = router;
