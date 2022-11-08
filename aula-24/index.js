const express = require('express')
const moment = require('moment')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    console.log(req)
    res.send = ('Olá, amigos.')
}) 

app.post('/', (req, res) => {
    console.log(req)
    res.status(201).send(req.body)
}) 

app.listen(port, () => {
    console.log(`API executando na porta ${port}`)
})