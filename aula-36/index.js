const express = require('express')
const app = express ()
const PORT = 3000


app.get('/', (req, res) => {
    res.send('')
})

app.get('/usuarios', (req, res) => {
    res.send([{nome: 'Pedro Henrique', email: 'pedroh@gmail.com'},
              {nome: 'Pedro Henrique', email: 'pedroh@gmail.com'},
              {nome: 'Pedro Henrique', email: 'pedroh@gmail.com'}])
})

app.listen(PORT, () => {
    console.log(`serviço executando em: http://127.0.0.1:${PORT}`)
})


// o que fizemos na aula 36?
// adc uma biblioteca nova (prisma) 1° npm install prisma, 2° npx prisma init, 3° npx prisma db pull, 4° npx prisma generate 