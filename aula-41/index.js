const express = require ('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient;

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Olá, mundo!')
})

app.get('/usuarios', async (req, res) => {
    const usuarios = await prisma.usuarios.findMany()
    res.send(usuarios)
})

app.post('/usuarios', async (req, res) => {
    const data = req.body
    const resultado = await prisma.usuarios.create({data})
    if (resultado) 
        res.status(201).send(resultado)
})

app.put('/usuarios', async (req, res) => {
    const usuarios = await prisma.usuarios.findMany()
    res.send(usuarios)
})





app.listen(PORT, () => {
    console.log(`serviço executando em: http://127.0.0.1:${PORT}`)
})