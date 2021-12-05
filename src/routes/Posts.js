const express = require("express");
const {
  createPost,
  getAllPost,
  deletePost,
  getPost,
  updatePost,
} = require("../controllers/post");

const router = express.Router();

router.route("/").get(getAllPost);
router.route("/").post(createPost);
router.route("/:id").delete(deletePost);
router.route("/:id").get(getPost);
router.route("/:id").patch(updatePost);

module.exports = router;
