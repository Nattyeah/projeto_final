const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventosSchema = new Schema ({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true, required: false },
    nome: {type: String, auto: true, required: false },
    data: { type: String, auto: true, required: false },
    local: { type: String, auto: true, required: false },
    descricaoEvento: { type: String, auto: true, required: false }
})

const eventosCollection = mongoose.model('eventos', eventosSchema)

module.exports = eventosCollection