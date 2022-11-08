const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()
const PORT = process.env.PORT
const Produto = require('./models/produtos.model')


app.use(express.json())


mongoose.connect(process.env.DATABASE)
.then(() => {
    console.log('MongoDB conectado com sucesso!')
}).catch((e) => {
    console.log(e)
})

app.get('', (req, res) => {
    res.send('Hello, Word!')
})

app.post('/produtos', async (req, res) => {
    const produto = new Produto(req.body)
    const retorno = await produto.save()
    res.send(retorno)
})

app.listen(PORT, ()=> {
    console.log(`listening on port: ${PORT}`)
})