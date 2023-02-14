const express = require('express');

const categoryRouter = require('./infrastructure/services/category/router');
const customerRouter = require('./infrastructure/services/customer/router');

//aqui a gente inicia o express
const app = express();

//adicionando as rotas de category ao servidor
app.use(categoryRouter);
app.use(customerRouter);

//definindo o tipo de dado que vai ficar saindo e chegando da API
app.use(express.json());

//porta do servidor da API
const port = 8000;

//toda requisiçao vai passar por essa função
function main() {
    console.log('API rodando no endereço http://localhost:'+port);
}

//aqui a gente sobe o servidor
app.listen(port, main);
