const dotenv = require('dotenv-safe').load()
const app = require('./app')
const port = process.env.PORT || 3002

app.listen(port, function () {
    console.info(`App está rodando na porta ${port}`)
})  