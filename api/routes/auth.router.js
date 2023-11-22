const router = require("express").Router();

const { signup, login } = require("../controllers/auth.controller");

router.post("/signup", signup);
router.get("/login", login);

module.exports = router;
