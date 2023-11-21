const router = require("express").Router()
const { checkAuth, checkAdmin} = require("../middleware")

const { createFamily, getFamilyById, getAllFamilies, updateFamily, deleteFamily} = require("../controllers/family.controller")

router.get("/", getAllFamilies)
router.get("/families/:id", checkAuth, checkAdmin, getFamilyById)
router.post("/families/:id", checkAuth, createFamily)
router.put("/families/:id", checkAuth, updateFamily)
router.delete("/families/:id", checkAuth, checkAdmin, deleteFamily)

module.exports = router