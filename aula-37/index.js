const express = require('express')
const app = express ()
const axios = require('axios')
const PORT = 3001

app.get('/', (req, res) => {
    res.send('Olá Mundo!')
})

app.get('/usuarios', (req, res) => {
    axios.get('http://127.0.0.1:3002').then((resposta) =>{
        res.send(resposta.data)
    }).catch((error) => {
        console.log(error)
        res.send(error)
    }).finally(() => {
        res.send('Finalmente terminamos essa promise')
    })
})

app.get('/usuarios-await', async (req, res) => {
  try {
      const usuarios = await axios.get('http://127.0.0.1:3002')
      res.send(usuarios.data)
  }catch(e) {
    console.log()
  }finally {
    console.log()
  }

})

app.listen(PORT, () => {
    console.log(`serviço executando em: http://127.0.0.1:${PORT}`)
})