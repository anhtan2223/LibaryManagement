const express = require('express')
const router = express.Router()
const controller = require('../controller/Sach.controller')

router.route('/')
    .get(controller.getAllBook)
    .post(controller.importBook)

router.route('/home').get(controller.GetBookHomeView)

router.route('/home/asc').get(controller.SortAscend)
router.route('/home/desc').get(controller.SortDescend)

router.route('/home/search').post(controller.SearchBookByName)

router.route('/:bid')
    .get(controller.getBookByID)
    .delete(controller.deleteBook)

module.exports = router