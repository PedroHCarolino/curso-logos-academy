const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

app.get('/', (req, res) => {
    res.send('Hello, word!')
})

app.get('/admins', async (req, res) => {
    const admins = await prisma.admins.findMany()
    res.send(admins)
})

app.get('/prestadores', async (req, res) => {
   try {
       const prestadores = await prisma.prestadores.findMany()
       res.send(prestadores)
   }catch(e) {
    console.log(e)
   }finally {
    console.log()
   }
})

app.listen(PORT, () => {
    console.log(`serviço executando em: http://127.0.0.1:${PORT}`)
})