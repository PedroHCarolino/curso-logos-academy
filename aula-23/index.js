const express = require('express')
const app = express()
const porta = 1500
const routes = require('./routes/rotas')

app.get('/Curso', (req, res) => {
    res.send('Eaiii, Tmj galera do Curso FullStack-JS')
})

app.use('/Curso', routes)

app.listen(porta, () => {
    console.log(`Serviço executando na porta: ${porta}`)
})

