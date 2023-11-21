const { getAllBlogs, getOneBlog, createBlog, updateBlog, deleteBlog } = require('../controllers/blog.controller')
//aqui falta poner lo de checkAuth y checkAdmin y blablabla Famblablap

const router = require('express').Router()

//CRUD básico de Blog
router.get('/', getAllBlogs)
router.get('/:id', getOneBlog)
router.post('/', createBlog)
router.put('/:id', updateBlog)
router.delete('/:id', deleteBlog)

module.exports = router