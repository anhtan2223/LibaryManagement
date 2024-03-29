const express = require('express')
const router = express.Router()
const controller = require('../controller/TacGia.controller')

router.route('/')
    .get(controller.hello)

module.exports = router