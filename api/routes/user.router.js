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

router.get("/admin", checkAuth, checkAdmin, getAllUsers);
router.get("/admin/:id", checkAuth, checkAdmin, getOneUser);
router.get("/profile/:userId", checkAuth, getFamProfile);
router.get("/profile", checkAuth, getProfile);
router.post("/", checkAuth, checkMaster, createUser);
// router.post('/createFam', checkAuth, checkMaster, createFam)
router.put("/:id", checkAuth, checkMaster, updateUser);
router.delete("/:id", checkAuth, checkMaster, deleteUser);

module.exports = router;
