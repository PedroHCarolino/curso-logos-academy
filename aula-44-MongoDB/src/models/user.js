const mongoose = require('mongoose')


const User = new mongoose.Schema ({
    nome: { type: String, required: true},
    telefone: {type: String,},
    email: { type: String, required: true},
    endereco: { type: Array, required: true}
})

module.exports = mongoose.model('UsuarioPedro', User)