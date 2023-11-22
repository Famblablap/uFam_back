const router = require("express").Router();

const {
  getAllMessages,
  getOneMessage,
  getAllFamMessages,
  getOneFamMessages,
  createMessage,
  deleteOneMessage,
} = require("../controllers/message.controller");
const { checkAuth, checkAdmin, checkMaster } = require("../middleware/index");

router.get("/", checkAuth, checkAdmin, getAllMessages);
router.get("/:id", checkAuth, checkAdmin, getOneMessage);
router.get("/", checkAuth, getAllFamMessages);
router.get("/:id", checkAuth, getOneFamMessages);
router.post("/", checkAuth, createMessage);
router.delete("/:id", checkAuth, checkMaster, deleteOneMessage);

module.exports = router;
