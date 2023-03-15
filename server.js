const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();


const categoryRouter = require('./infrastructure/services/category/router');
const customerRouter = require('./infrastructure/services/customer/router');
const userRouter = require('./infrastructure/services/user/router');

//aqui a gente inicia o express
const app = express();

app.use(cors());

//definindo o tipo de dado que vai ficar saindo e chegando da API
app.use(express.json()); 

//adicionando as rotas de category ao servidor
app.use(categoryRouter);
app.use(customerRouter);
app.use(userRouter);


//porta do servidor da API
const port = process.env.PORT; 

//toda requisiçao vai passar por essa função
function main() {
    console.log('API rodando no endereço http://localhost:'+port);
}

//aqui a gente sobe o servidor
app.listen(port, main);
