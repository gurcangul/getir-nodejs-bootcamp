const express = require("express");
const { getAllUsers, createUser} = require("../controllers/user");

const router = express.Router();

router.route("/").get(getAllUsers);
router.route("/").post(createUser);

module.exports = router;
