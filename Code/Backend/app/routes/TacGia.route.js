const express = require('express')
const router = express.Router()
const controller = require('../controller/TacGia.controller')

router.route('/')
    .get(controller.getAllTacGia)
    .post(controller.createTacGia)

router.route('/:id')
    .get(controller.getTacGiaByID)
    .put(controller.updateTacGia)
    .delete(controller.deleteTacGia)

module.exports = router