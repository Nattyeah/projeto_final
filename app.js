const express = require('express')
const app = express()   
const cors = require('cors')
const bodyParser = require("body-parser")

const database = require('./src/model/database')
database.connect;

app.use(cors())
app.use(bodyParser.json())

const index = require('./src/routes/index')
const eventos = require('./src/routes/eventosRoutes')

app.use('/', index)
app.use('/eventos', eventos)

module.exports = app

