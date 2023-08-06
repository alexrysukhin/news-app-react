const router = require("express").Router();

const getTopic = require("../controllers/news");

router.get("/:topic", getTopic);

module.exports = router
