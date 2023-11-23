const { getAllBlogs, getOneBlog, createBlog, deleteBlog } = require("../controllers/blog.controller");
//aqui falta poner lo de checkAuth y checkAdmin y blablabla Famblablap

const router = require("express").Router();

//CRUD básico de Blog
router.get("/admin", getAllBlogs);
router.get("/admin/:id", getOneBlog);
router.post("/", createBlog);
router.delete("/:id", deleteBlog);

module.exports = router;
