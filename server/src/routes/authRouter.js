const Router = require('express')
const router = new Router()
const controller = require('../сontrollers/authController')
const {check} = require("express-validator")
const authMiddleware = require('../middleware/authMiddleware')
const roleMiddleware = require('../middleware/checkRoleMiddleware')

router.post('/login', controller.login)
router.get('/users', roleMiddleware(["ADMIN"]), controller.getUsers)

module.exports = router