const { getAllBlogs, getOneBlog, createBlog, deleteBlog } = require('../controllers/blog.controller')
const { checkAuth, checkAdmin } = require('../middleware/index')

const router = require('express').Router()

//CRUD básico de Blog
router.get('/', checkAuth, checkAdmin, getAllBlogs)
router.get('/:id', checkAuth, getOneBlog)
router.post('/', checkAuth, createBlog)
router.delete('/:id', checkAuth, deleteBlog)

module.exports = router