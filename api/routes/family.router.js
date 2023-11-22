const { createFamily, getFamilyById, getAllFamilies, getAllFamProfiles, updateFamily, deleteFamily} = require("../controllers/family.controller")
const { checkAuth, checkAdmin} = require("../middleware")

const router = require("express").Router()

router.get("/admin", checkAuth, checkAdmin, getAllFamilies)
router.get("/admin/:id", checkAuth, checkAdmin, getFamilyById)
router.get("/", checkAuth, getAllFamProfiles)
router.post("/:id", checkAuth, createFamily)
router.put("/:id", checkAuth, updateFamily)
router.delete("/:id", checkAuth, checkAdmin, deleteFamily)

module.exports = router