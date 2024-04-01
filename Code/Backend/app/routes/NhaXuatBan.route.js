const express = require('express')
const router = express.Router()
const controller = require('../controller/NhaXuatBan.controller')

router.route('/')
    .get(controller.getAllNXB)
    .post(controller.createNXB)

router.route('/:id')
    .get(controller.getNXBByID)
    .put(controller.updateNXB)
    .delete(controller.deleteNXB)

module.exports = router