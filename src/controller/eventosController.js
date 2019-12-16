const eventosCollection = require('../model/eventosSchema')

const getAll = (request, response) => {
    eventosCollection.find((error, eventos) => {
        if(error){
            return response.status(500).send(error)
        } else {
            return response.status(200).send(eventos)
               }
    })
}

const postEvento = (request, response) => {
    const eventoBody = request.body
    const evento = new eventosCollection (eventoBody)
    evento.save((error) => {
        if(error){
            console.log(error)
            //return response.status(400).send(error);
        } else {
            return response.status(201).send(evento);
        }
    })
}

module.exports = {
    getAll,
    postEvento
}