const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const eventos = require('./src/routes/eventosRoutes')


app.use(cors())
app.use(bodyParser.json())
app.use('/eventos', eventos)

app.get('/', (request, response) => {
    response.send('Olá Mundo')
})
