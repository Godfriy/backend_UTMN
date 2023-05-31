const Router = require('express')
const contentRouter = require("./contentRouter.js");

const router = new Router()

router.use('/content', contentRouter)

module.exports = router
