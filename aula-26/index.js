// para começar o projeto node( npm init -y)
// find retorna 1 elemento
// filter retorna todos os elementos que atende a condição
// CRUD = Create (Post), Read (Get), Update and Delete(Delete)
//params(obrigadorio) query(opcional)

const express = require('express')
const app = express()
const PORT = 3000
const carros = require('./exercicio')


app.get('/filtro/:marca', (req, res) => {
    const marca = req.params.marca
    const retorno = carros.filter((carro) => carro.marca == busca )
    res.send(`carros: ${JSON.stringify(retorno)}`)
})

app.get('/filtro', (req, res) => {
    const marca = req.query.marca
    const cor = req.query.cor
    const ano = req.query.ano
    const carrosFiltrados = carros.filter((carro) => {
        if(carro.marca === marca || carro.cor === cor || carro.ano === ano){
            return carro
        }
    })

    res.send(carrosFiltrados)
})

app.delete('/delete/:id', (req, res) => {
    const id = req.params.id
    const novosCarros = carros.filter((carro) => carro.id != id)
    res.send(novosCarros)
})

app.put('/update/:id', (req, res) => {
    const carro = req.body
    res.send(carro)
})

app.listen(PORT, () => console.log('API está funcionando corretamente'))
