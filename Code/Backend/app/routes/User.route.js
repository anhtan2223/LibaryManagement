const express = require('express')
const router = express.Router()
const controller = require('../controller/User.controller')

router.route('/')
    .get(controller.getAllUser)
    .post(controller.register)

router.route('/statistic')
    .get(controller.GetStatistic)

router.route('/borrowed')
    .get(controller.GetRecentBorrowed)

router.route('/expired')
    .get(controller.GetOverExpired)

router.route('/:uid')
    .get(controller.getUserByID)
    .put(controller.updateUser)
    .delete(controller.deleteUser)

router.route('/login')
    .post(controller.login)



module.exports = router