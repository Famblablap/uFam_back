const { createFamily, getFamilyById, getAllFamilies, updateFamily, deleteFamily} = require("../controllers/family.controller")
const { checkAuth, checkAdmin, checkMaster} = require("../middleware")

const router = require("express").Router()

router.get("/", checkAuth, checkAdmin, getAllFamilies)
router.get("/:id", checkAuth, getFamilyById)
router.post("/", checkAuth, checkMaster, createFamily)
router.put("/:id", checkAuth, checkMaster, updateFamily)
router.delete("/:id", checkAuth, checkMaster, deleteFamily)

module.exports = router