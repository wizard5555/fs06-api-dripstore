const database = require('../../connection/database');
const app = require('express').Router();
const argon2 = require('argon2');
const jwt = require('jsonwebtoken'); //pra gerar o token autenticado
const repository = require('../../repository/abstractRepository');

function gerarNovoToken(email, id) {
    let data = {
        username: email, 
        id: id,
    };

    let novoToken = jwt.sign(data, 'senhasenha', {
        expiresIn: 1800
    }); //gerando um token exclusivo praquele email
    
    return novoToken;
}

// GET http://localhost:8000/users
app.get('/users', async (req, res) => {
    // let data = await database.execute('SELECT id, name, email FROM tb_user');
    let data = await repository.findAll('tb_user', ['id', 'name', 'email']);

    res.send(data);
});

app.post('/users', async (req, res) => {
    let pass = await argon2.hash(req.body.password);

    let sql = `INSERT INTO tb_user (id, name, email, password) VALUES (
        '${req.body.id}',
        '${req.body.name}',
        '${req.body.email}',
        '${pass}'
    )`;

    database.execute(sql);

    res.sendStatus(201);
});

app.post('/login', async (req, res) => {
    let {email, password} = req.body;

    // caso 1: email nao existir
    let user = await database.execute(`
        SELECT * FROM tb_user WHERE email='${email}'
    `);

    if (user.length === 0) {
        res.status(400).send({erro: 'Email nao existe'});
        return;
    }

    //se chegou ate aqui é pq encontrou o usuario
    // testar o caso 2: senha
    user = user[0];

    if (! await argon2.verify(user.password, password)) {
        res.status(400).send({erro: 'Senha Incorreta'});
        return;
    }

    let token = gerarNovoToken(email, user.id); 

    database.execute(`
        UPDATE tb_user SET token='${token}' WHERE id='${user.id}'
    `);

    res.send({token: token});
});

app.get('/logout', async (req, res) => {
    //quebrando o valor em 2, separando pelo espaço em branco
    let token = req.headers.authorization.split(' ')[1]; 

    database.execute(`
        UPDATE tb_user SET token=NULL WHERE token='${token}'
    `);

    res.send(200);
});


module.exports = app;

