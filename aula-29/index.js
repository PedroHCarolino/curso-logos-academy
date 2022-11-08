const express = require('express');
const app = express();
const PORT = 3000;
const usuarios = require('./exercicio')

app.use((req, res, next) => {
    const id = req.query.id
    const retorno = usuarios.filter((usuario) => {
        return usuario.id == id && usuario.admin == true
    })
    if (retorno.length > 0){ 
       next()
    }
    res.send('Infelizmente você não tem permissão!')
})

app.get('/usuarios/:id', (req, res) => {
       res.send('Fazendo download do arquivo...') 
})


app.get('/usuarios/:id/relatorios', (req, res) => {
    const admin = req.params.admin
    res.send('fazendo download do relátorio...')
})
    

// app.get('/relatorio', (req, res) => {
//     res.send('fazendo download do relátorio...')
// })

// app.get('/relatorio-filtrado', (req, res) => {
//     res.send('fazendo download do relátorio...')
// })

app.listen(PORT, () => {
    console.log(`👍Serviço executando em: 127.0.0.1:${PORT}`)})