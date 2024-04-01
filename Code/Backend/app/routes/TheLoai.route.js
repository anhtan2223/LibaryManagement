const express = require('express')
const router = express.Router()
const controller = require('../controller/TheLoai.controller')

router.route('/')
    .get(controller.getAllTheLoai)
    .post(controller.createTheLoai)

router.route('/:id')
    .get(controller.getTheLoaiByID)
    .put(controller.updateTheLoai)
    .delete(controller.deleteTheLoai)

module.exports = router