require('dotenv-safe').load()
const express = require('express')
const router = express.Router()

const controller = require('../controller/eventosController')

router.get('/', controller.getAll)
router.get('/id/:local', controller.getById)
router.post('/criar/', controller.add)
// router.delete('/remove', controller.delete)

module.exports = router