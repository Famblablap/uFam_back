const { createFamily, getFamilyById, getAllFamilies, updateFamily, deleteFamily} = require("../controllers/family.controller")
const { checkAuth, checkAdmin, checkMaster} = require("../middleware")

const router = require("express").Router()

router.get("/", getAllFamilies)
router.get("/admin/:id", checkAuth, checkAdmin, getFamilyById)
router.post("/:id", checkAuth, createFamily)
router.put("/:id", checkAuth, updateFamily)
router.delete("/admin/:id", checkAuth, checkAdmin, deleteFamily)

module.exports = router