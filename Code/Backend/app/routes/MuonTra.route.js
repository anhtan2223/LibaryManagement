const express = require('express')
const router = express.Router()
const controller = require('../controller/MuonTra.controller')

router.route('/')
    .get(controller.getAllMuonTra)
router.route('/:id')
    .get(controller.getMuonTraByID)

module.exports = router