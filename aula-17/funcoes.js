// desafio
// eu quero somar 2 números e ter um resultado da soma desses números

console.log (numero1 + numero2)

function somarDoisNumeros(numero1, numero2) {
    console.log(numero1 + numero2)
}

somarDoisNumeros(10, 15)
somarDoisNumeros(30, 100)

function subtrairDoisNumeros(numero1, numero2){
    return numero1 - numero2
}

let resultadoDaSubtração = subtrairDoisNumeros(10, 10)
console.log(resultadoDaSubtração)

//Eu quero uma função que retorne nome e sobrenome.
let nomeCompleto = function(primeiroNome, segundoNome){
    return primeiroNome + ' ' + segundoNome
}

console.log(nomeCompleto('Pedro', 'Henrique'))


// criando uma função//
function somaDoisNumeros(numero1, numero2) {
    return numero1 + numero2
}

somaDoisNumeros(10, 10)