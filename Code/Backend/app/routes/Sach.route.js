const express = require('express')
const router = express.Router()
const controller = require('../controller/Sach.controller')

router.route('/')
    .get(controller.getAllBook)
    .post(controller.importBook)

router.route('/:bid')
    .get(controller.getBookByID)

module.exports = router