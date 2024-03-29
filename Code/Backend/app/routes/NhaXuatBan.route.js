const express = require('express')
const router = express.Router()
const controller = require('../controller/NhaXuatBan.controller')

router.route('/')
    .get(controller.hello)

module.exports = router