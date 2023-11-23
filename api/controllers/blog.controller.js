const Blog = require ('../models/blog.model')

async function getAllBlogs (req, res){
    try {
        const blogs = await Blog.findAll()
        return res.status(200).json(blogs)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function getOneBlog (req, res){
    try {
        const blog = await Blog.findByPk(req.params.id)
        const blog = await Blog.findByPk(req.params.id)
        if (!blog) { res.status(500).send('Blog not found') }
        return res.status(200).json(blog)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function createBlog(req, res) {
    try {
        const blog = await Blog.create(req.body)
        return res.status(200).json(blog)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function updateBlog(req, res) {
    try {
        const blog = await Blog.update(req.body, {
            where: {
                id: req.params.id
            },
        })
        return res.status(200).json(blog)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

// async function updateBlog(req, res) {
//     try {
//         const blog = await Blog.update(req.body, {
//             where: {
//                 id: req.params.id
//             },
//         })
//         return res.status(200).json(blog)
//     } catch (error) {
//         return res.status(500).send(error.message)
//     }
// }

async function deleteBlog(req, res) {
    try {
        const blog = await Blog.destroy({
            where: {
                id: req.params.id
            },
        })
        res.status(500).json({ text: 'Blog removed', blog: blog })
    } catch (error) {

    }
}

module.exports = {
    getAllBlogs,
    getOneBlog, 
    createBlog,
    deleteBlog
}