const express = require('express')
const router = express.Router()
const controller = require('../controller/TheLoai.controller')

router.route('/')
    .get(controller.hello)

module.exports = router