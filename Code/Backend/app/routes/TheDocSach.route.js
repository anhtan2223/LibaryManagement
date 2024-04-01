const express = require('express')
const router = express.Router()
const controller = require('../controller/TheDocSach.controller')

router.route('/')
    .get(controller.getAllTTV)

router.route('/:id')
    .get(controller.getTTVByID)

module.exports = router