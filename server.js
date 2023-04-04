const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const swagger = require('swagger-ui-express');
const swaggerFile = require('./swagger.json');

dotenv.config();



const categoryRouter = require('./infrastructure/services/category/router');
const customerRouter = require('./infrastructure/services/customer/router');
const userRouter = require('./infrastructure/services/user/router');
const bannerRouter = require('./infrastructure/services/banner/router');

//aqui a gente inicia o express
const app = express();


//definindo o tipo de dado que vai ficar saindo e chegando da API
app.use(cors());
app.use(express.json()); 

//adicionando as rotas de category ao servidor
app.use(categoryRouter);
app.use(customerRouter);
app.use(userRouter);
app.use(bannerRouter);

//gerando documentação
app.use('/', swagger.serve, swagger.setup(swaggerFile));


//porta do servidor da API
const port = process.env.PORT; 

//toda requisiçao vai passar por essa função
function main() {
    console.log('API rodando no endereço http://localhost:'+port);
}

//aqui a gente sobe o servidor
app.listen(port, main);
