const {
  getAllLikes,
  createLike,
  deleteLike,
} = require("../controllers/like.controller");
const { checkAuth } = require("../middleware");

const router = require("express").Router();

router.get("/", getAllLikes);
router.post("/", checkAuth, createLike);
router.delete("/:id", deleteLike);

module.exports = router;
