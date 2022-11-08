const express = require(express);
const ejs = require('ejs');
const app = express();
const PORT = 3000;


app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());

app.get('/test', (req, res) => {
    res.send('NiceJob')
})

app.get('/', (req, res) => {
    res.render('home');
})

app.post('/login', (req, res) => {
    const body = req.body;

    res.send(body);
})


app.listen(PORT, () => console.info(`Server running on port ${PORT}`));