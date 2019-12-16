const app = require('./app')
const port = 3000

app.listen(port, function () {
    console.info(`App está rodando na porta ${port}`)
})