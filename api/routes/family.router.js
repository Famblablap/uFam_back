const { createFamily, getFamilyById, getAllFamilies, updateFamily, deleteFamily} = require("../controllers/family.controller")
const { checkAuth, checkAdmin, checkMaster} = require("../middleware")

const router = require("express").Router()

router.get("/", checkAuth, checkAdmin, getAllFamilies)
router.get("/families/:id", checkAuth, getFamilyById)
router.post("/families/:id", checkAuth, checkMaster, createFamily)
router.put("/families/:id", checkAuth, checkMaster, updateFamily)
router.delete("/families/:id", checkAuth, checkMaster, deleteFamily)

module.exports = router