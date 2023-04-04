const sequelize = require('sequelize');
const dotenv = require('dotenv');

dotenv.config(); //carregando as variaveis de ambiente (.env)

const conexao = new sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql'
    }
);

module.exports = conexao;

