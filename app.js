const express = require('express');
const app = express();
const porta = 3000;
const { routes } = require('./routes');
const cors = require('cors');
const path = require('path');

app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname,'src/static')))
app.set('views', path.join(__dirname, 'src/static'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(routes);


app.get('/', (requisicao, response) => {
    response.render('index.html');
});


app.listen(porta, console.log(`Api rodando na porta ${porta}`));
