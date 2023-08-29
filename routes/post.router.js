const express = require("express");
const router = express.Router();

const postControlers = require("../controlers/post.controler");

router.get("/", postControlers.getAll);

module.exports = router;
