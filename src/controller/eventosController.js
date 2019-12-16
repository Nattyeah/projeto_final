require('dotenv-safe').load();
const eventosCollection = require('../model/eventosSchema');

const getAll = (request, response) => {
  eventosCollection.find((error, eventos) => {
    if (error) {
      return response.status(500).send(error)
    } else {
      return response.status(200).send(eventos)
    }
  })
};

const getById = (request, response) => {
  const localidade = request.params.id;
  return eventosCollection.findById(localidade, (error, eventos) => {
    if (error) {
      return response.status(500).send(error)
    } if (eventos) {
      return response.status(200).send(eventos)
    } else {
      return response.status(404).send('Evento não encontrado.')
    }
  })
};

const add = (request, response) => {
  const novoEvento = new eventosCollection(request.body)
  novoEvento.save((error) => {
    if (error) {
      console.log(error)
      return response.status(500).send(error)
    }
    return response.status(201).send(novoEvento)
  })
};

const remove = (request, response) => {
  const id = request.params.id
  eventosCollection.findByIdAndRemove(id, (error, evento) => {
    if (error) {
      return response.status(500).send(error)
    } else if (evento) {
      console.log(2)
      return response.status(200).send("Evento removido")
    }
    else {
      return response.sendStatus(404)
    }
  })
}

const atualizar = (request, response) => {
  const atualizarId = request.params.id
  const eventoDoBody = request.body
  eventosCollection.findByIdAndUpdate(atualizarId, eventoDoBody, (error, evento) => {
    if (error) {
      return response.status(500).send(error)
    } else if (evento) {
      return response.status(200).send("Evento atualizado")
    }
    else {
      return response.sendStatus(404)
    }
  })
}

module.exports = {
  getAll,
  add,
  remove,
  getById,
  atualizar

}