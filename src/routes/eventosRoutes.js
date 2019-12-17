const express = require('express')
const router = express.Router()

const controller = require('../controller/eventosController')

router.get('/', controller.getAll)
// router.get('/local', controller.getById)
router.post('/criar', controller.add)
router.delete('/remove/:id', controller.remove)
router.patch('/atualizar/:id', controller.atualizar)

module.exports = router