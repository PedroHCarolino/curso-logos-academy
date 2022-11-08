// Fabrica = Logos
//carro.fabrica = 'Logos'
//carro.modelo = 'Sedan'
//carro.ano = 2022

const fabricarCarros = (modelo, ano, cor, km) => {
    let objeto = {}
    objeto.fabrica = 'Logos'
    objeto.modelo = modelo
    objeto.ano = ano
    objeto.cor = cor
    return objeto
}

console.log(fabricarCarros('TiggoX', 'Prata'))
console.log(fabricarCarros('Civic', 'Branco'))
console.log(fabricarCarros('Golf', 'Preto'))
console.log(fabricarCarros('Velar', 'Preto Fosco'))