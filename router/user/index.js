const router = require('express').Router()
const controller = require('./controller')

router.post('/login', controller.login) // host/user/login
router.post('/register', controller.register)
router.post('/get-profile', controller.getProfile)

module.exports = router
