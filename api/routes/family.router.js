const { getFamilyById, getAllFamilies, getAllFamProfiles, updateFamily, deleteFamily } = require("../controllers/family.controller")
const { sendInvitation } = require("../controllers/verified_email.controller")
const { checkAuth, checkAdmin, checkMaster} = require("../middleware")

const router = require("express").Router()

router.get("/admin", checkAuth, checkAdmin, getAllFamilies)
router.get("/admin/:id", checkAuth, checkAdmin, getFamilyById)
router.get("/", checkAuth, getAllFamProfiles)
router.post("/sendInvitation", checkAuth, checkMaster, sendInvitation)
router.put("/:id", checkAuth, updateFamily)
router.delete("/:id", checkAuth, checkAdmin, deleteFamily)

module.exports = router