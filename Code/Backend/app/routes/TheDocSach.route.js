const express = require('express')
const router = express.Router()
const controller = require('../controller/TheDocSach.controller')

router.route('/')
    .get(controller.hello)

module.exports = router