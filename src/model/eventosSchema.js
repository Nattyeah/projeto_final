const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventosSchema = new Schema ({
    // _id: { type: mongoose.Schema.Types.ObjectId, auto: true, required: true },
    nome: {type: String, required: false },
    data: { type: String, required: false },
    local: { type: String, required: false },
    descricaoEvento: { type: String, required: false }
})

const eventosCollection = mongoose.model('eventos', eventosSchema);

module.exports = eventosCollection