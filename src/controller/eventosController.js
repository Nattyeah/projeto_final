const eventosCollection = require('../model/eventosSchema')

const getAll = (request, response) => {
    eventosCollection.find((error, eventos) => {
        if(error){
            return response.status(500).send(error)
        } else {
            return response.status(200).send(eventos)
               }
    })
};

const getById = (request, response) => {
    const localidade = request.body;

    return eventosCollection.findById(localidade, (error, eventos) => {
   if(error){
        return response.status(500).send(error)
    } else {
        return response.status(200).send(eventos)
           }
})
};

const add = (request, response) => {
    console.log(request.url)
    // novo objeto pra nossa coleção
    const eventoDoBody = request.body
    const evento = new eventosCollection(eventoDoBody)
  
    contato.save((error) => {
      // if(error !== null && error !== undefined)
      if(error) {
        return response.status(400).send(error)
      } else {
        return response.status(201).send(evento)
      } 
    })
  }


module.exports = {
    getAll,
    add,
    getById
}
//"Saturday, 19 October 1996, 9:00:00 pm"