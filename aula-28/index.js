// codguin para levantar um serviço

const express = require('express')
const app = express()
const multer = require('multer')
const PORT = 3000
const servicoDeEnvio = multer({ dest: 'arquivos'})
app.use('/arquivos', express.static('arquivos'))


app.get('/', (req, res) => {
    res.send('Olá Mundo!')
})

app.post('/arquivo-upload', servicoDeEnvio.single('imagem'), (req, res) => {
    const nomeDoArquivo = req.file.filename
    const tamanhoDoArquivo = req.file.size
    console.log(req.file)
    res.send(`nome do arquivo: ${nomeDoArquivo}, tamanho: ${tamanhoDoArquivo}`)
})

app.listen(3000, () => {
    console.log(`😊 Serviço executando em: http://localhost:${PORT}`)   
})