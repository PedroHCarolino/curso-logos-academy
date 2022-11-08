const filmes = [ 
    'A batalha de Riddick',
    'Lagoa azul',
    'Senhor dos anéis - A sociedade do anel',
    'Senhor dos anéis - As duas torres',
    'Senhor dos anéis - O retorno do Rei',
    'Rambo'
]

let filmesDoMap = filmes.map(function(elementroDoArray) {
    return elementroDoArray + 'Algo Mais'
})

console.log(filmesDoMap)

const numeros = [ 10, 5, 8, 20, 13 ]
//criar um Map para pegar o array de numeros
// e multiplicar * 2

const numerosMultiplicadosPorDois = numeros.map((numeros)=> {
    return numeros * 2;
})

console.log(numeros)
console.log(numerosMultiplicadosPorDois)