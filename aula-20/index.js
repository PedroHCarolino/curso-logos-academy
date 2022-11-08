const axios = require('axios')
const filmes = require('./filmes')

axios.get('https://pokeapi.co/api/v2/pokemon').then((response) => {
    console.log(response.data);
}).catch((error) => {
    console.log(error)
})

console.log(filmes)