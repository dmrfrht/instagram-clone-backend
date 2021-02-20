const router = require('express').Router()
const controller = require('./controller')

router.post('/newpost', controller.newPost)
router.get('/getposts', controller.getPosts)

module.exports = router
