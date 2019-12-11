const express = require('express')
const router = express.Router()

const controller = require('../controller/eventosController')

router.get('/', controller.getAll)
router.post('/eventos', controller.postEvento)