// toda function precisa de () msm se não houver nada dentro.

function validarFruta(fruta) {
    if (fruta === 'Laranja') {
        return 'temos 10 unidades de laranja'
    }
    if (fruta === 'Moranga') {
        return 'temos 2 bandeijas de morango'
    }
    if (fruta === 'Manga') {
        return 'Temos 10 unidades de manga' 
    } else {
        return 'Não temos essa fruta disponivel'
    }
}

console.log(validarFruta('Laranja'))
console.log(validarFruta('Morango'))
console.log(validarFruta('Manga'))