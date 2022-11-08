const express = require('express');
const users = require('./users');
const app = express();
const PORT = 3000;

const usuarios = require('./users')

app.use(express.json()); // testar no postman
app.use(express.urlencoded({ extended: (false)})); // testar no Chrome

app.get('/', (req, res) => {
    return res.send('Olá mundo!'); // metodo GET (url)
});

app.get('/obrigatorio/:id', (req, res) => {
    const id = req.params.id;
    return res.send(`você mandou o id: ${id}`);
});

app.get('/opcional', (req, res) => {
    const name = req.query.name;
    return res.send(`você informou o nome: ${name}`);
});

app.use((req, res, next) => {
    const authorization = req.headers.authorization;

    if (authorization) {
      return next();
    }
    
    return res.status(401).json({ status: 401, errorMessage: 'Não permissão'});
})

app.post('/users', (req, res, next) => {
    const isAdmin = req.headers.isadmin;

    if (isAdmin) {
        return next();
    }
})

app.post('/users', (req, res) => {
    const body = req.body;  // metodo POST (postman)
    if (body) {
        users.push(body);
    }

    return res.send(users);
});

app.put('/users/:id', (req, res) => {
    const id = parseInt (req.params.id);
    const body = req.body;
    
    const usersId = users.map((user) => user.id);
    const index = usersId.indexOf(id); // devolve o index do valor pedido


    if (index !== -1) {
        users[index] = {
            ...users[index],
            ...body,
        };
    }
  
    return res.send(users)
});

app.delete('/users/:id', (req, res) => {
    const id = req.params.id;

    const usersId = users.map((user) => user.id);
    const index = usersId.indexOf(id);
    
    if (index != -1) {
        const resultado = users.filter((user) => user.id != id);
    
        return res.send(resultado);
    }
})


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));