const produtos = [
      'Roteador', 
      'switch',
      'Servidor',
      'Teclado',
      'Mouse'
]

const meusProdutos = ((req, res) => {
    res.send(produtos)
})

module.exports = {
    meusProdutos
}