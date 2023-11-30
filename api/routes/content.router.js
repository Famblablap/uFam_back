const { getAllContent, getMyContent, getOneContent, getFamContent, getAllFamContent, createContent, deleteContent  } = require("../controllers/content.controller")
const { checkAuth, checkAdmin } = require("../middleware/index")

const router = require("express").Router()

router.get('/admin', checkAuth, checkAdmin, getAllContent)
router.get('/', checkAuth, getAllFamContent)
router.get("/profile", checkAuth, getMyContent)
router.get('/:id', checkAuth, getFamContent)
router.get('/admin/:id', checkAuth, checkAdmin, getOneContent)
router.post('/', checkAuth, createContent)
router.delete('/:id', checkAuth, deleteContent)


module.exports = router