const router = require("express").Router();
const {
  getAllUsers,
  getOneUser,
  getProfile,
  getFamProfile,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/user.controller");
const { checkAuth, checkAdmin, checkMaster } = require("../middleware/index");

router.get("/", checkAuth, checkAdmin, getAllUsers);
router.get("/:id", checkAuth, checkAdmin, getOneUser);
router.get("/profile", checkAuth, getProfile);
router.get("/profile/:id", checkAuth, getFamProfile);
router.post("/", createUser);
// router.post('/createFam', checkAuth, checkMaster, createFam)
router.put("/:id", checkAuth, checkMaster, updateUser);
router.delete("/:id", checkAuth, checkMaster, deleteUser);

module.exports = router;
