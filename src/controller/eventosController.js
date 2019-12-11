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
    const eventoNome = request.params.name;
    const eventoData = request.params.data;
    const evento = new eventosCollection ({name: eventoNome, data: eventoData})
    evento.save((error) => {
        if(error){
            return response.status(400).send(error);
        } else {
            return response.status(201).send(evento);
        }
    })
}

module.exports = {
    getAll,
    postEvento
}