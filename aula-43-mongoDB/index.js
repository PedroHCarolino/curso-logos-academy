const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://phteste:phteste1@cluster0.e3m14ig.mongodb.net/?retryWrites=true&w=majority')

const Cat = mongoose.model('Cat', { name: String });

const gato = new Cat({ name: 'Ganja' });

gato.save().then(() => console.log('Gato salvo com sucesso!'));