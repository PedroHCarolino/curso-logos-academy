function validarFruta(fruta) {
    switch (fruta) {
        case 'Laranja':
            console.log('temos 30 laranjas por R$ 10.')
            break;
        case 'Morango':
            console.log('Temos 3 bandeijas por R$ 10.')
            break;
        case 'Manga':
            console.log('temos 5 unidades de manga por R$10.')
            break;
    }
}

validarFruta('Laranja')
validarFruta('Morango')
validarFruta('Manga')