const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventosSchema = new Schema ({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true, required: true },
    name: {type: String, auto: true, required: true },
    data: { type: String, auto: true, required: true },
    local: { type: String, auto: true, required: true },
    descricaoEvento: { type: String, auto: true, required: true }
})

const eventosCollection = mongoose.model('eventos', eventosSchema)
module.exports = eventosCollection