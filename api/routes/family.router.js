const { createFamily, getFamilyById, getAllFamilies, getAllFamProfiles, updateFamily, deleteFamily} = require("../controllers/family.controller")
const { checkAuth, checkAdmin} = require("../middleware")

const router = require("express").Router()

router.get("/", checkAuth, getAllFamProfiles)
router.get("/", checkAuth, checkAdmin, getAllFamilies)
router.get("/:id", checkAuth, checkAdmin, getFamilyById)
router.post("/:id", checkAuth, createFamily)
router.put("/:id", checkAuth, updateFamily)
router.delete("/:id", checkAuth, checkAdmin, deleteFamily)

module.exports = router