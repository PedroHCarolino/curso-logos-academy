const json = require('./estados.json')
const frutas = ['uva', 'laranja', 'maça', 'abacate', 'manga']
// const estados = json.estados

for(let contador = 0; contador < json.estados.length; contador++) {
    console.log(contador)
    console.log(json.estados[contador])
    // if (json.estados[contador].nome === 'Paraíba') {
    //     for (let indice) {

    //     }
    // }
    // Adicionar uma condição pra pegar um estado especifico 
    // Depois fazer outro for 
    // E retornar a capital if (cidade === 'João Pessoa')
}

for(let contador = 0; contador < frutas.length; contador++) {
    console.log(contador)
    console.log(frutas[contador])
}

json.estados.forEach((estado)  => {
    console.log(estado[0])
});