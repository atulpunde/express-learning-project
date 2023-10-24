const express = require('express')
const blogs = require('../data/blogs.js')

const router = express.Router()

router.get('/', (req, res) => {
    res.render('home')
})

router.get('/blog', (req, res) => {
    res.render('blogHome', {
        blogs: blogs
    })
})

router.get('/blogpost/:slug', (req, res) => {
    const myBlog = blogs.filter((e) => {
        return e.slug == req.params.slug
    })
    res.render('blogPage', {
        title: myBlog[0].title,
        content: myBlog[0].content
    })
})

module.exports = router