const { getAllUsers, getOneUser, getProfile, getFamProfile, createUser, updateUser, deleteUser } = require("../controllers/user.controller");
const { checkAuth, checkAdmin, checkMaster } = require("../middleware/index");

const router = require("express").Router();

router.get("/admin", checkAuth, checkAdmin, getAllUsers);
router.get("/admin/:id", checkAuth, checkAdmin, getOneUser);
router.get("/profile/:userId", checkAuth, getFamProfile);
router.get("/profile", checkAuth, getProfile);
router.post("/", checkAuth, checkMaster, createUser);
router.put("/:id", checkAuth, checkMaster, updateUser);
router.delete("/:id", checkAuth, checkMaster, deleteUser);

module.exports = router;
