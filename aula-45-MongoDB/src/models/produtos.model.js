const mongoose = require('mongoose')

const ProdutoSchema = new mongoose.Schema({
    nome: { type: String, required: true},
    descricao: String,
    preco: { Type: String, required: true},
})


module.exports = mongoose.model('Produto', ProdutoSchema)