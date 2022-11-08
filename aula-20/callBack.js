
console.log('Esse executa rápido.')
setTimeout(() => {
   console.log('Informando que finalmente executamos essa string')
}, 6000);

let soma = (numero1, numero2) => numero1 + numero2
let subtrair = (numero1, numero2) => numero1 - numero2

let calculadora = (numero1, numero2, operacao) => {
    return operacao(numero1, numero2);
}

console.log(calculadora(10, 5, soma))
console.log(calculadora(10, 5, subtrair))