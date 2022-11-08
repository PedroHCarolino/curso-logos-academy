// criando uma function (função antiga do JS) //
//function somaDoisNumeros(numero1, numero2) {
//    return numero1 + numero2
//}

//console.log(somaDoisNumeros(10,10))

// Criando uma function flecha //

let subtraiDoisNumeros = (numero1, numero2) => numero1 - numero2

console.log(subtraiDoisNumeros(3,10))


let maiorDeIdade = (idade) => idade >= 18 ? 'opa, maior de idade'
    : 'Opa, menor de idade'
    console.log(maiorDeIdade(18))