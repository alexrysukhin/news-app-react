const router = require("express").Router();

const getTopic = require("../controllers/topic");

router.get("/", getTopic);

module.exports = router
