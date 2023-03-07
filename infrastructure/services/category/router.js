const app = require('express').Router();
const database = require('../../connection/database');
const validator = require('./validator');

app.get('/categories', async (req, res) => {
    let token = req.headers.senha;

    if (token !== '123bolinha') {
        res.status(401).send({
            error: 'invalid token'
        });

        return;
    }

    let data = await database.execute('SELECT * FROM tb_category');

    res.send(data);
});

app.get('/categories/:id', async (req, res) => {
    let data = await database.execute(`
        SELECT * FROM tb_category WHERE id='${req.params.id}'
    `);

    res.send(data[0]);
});

app.post('/categories', async (req, res) => {
    let body = req.body;

    let errors = validator.validRequest(body);

    if (errors.length > 0) {
        res.status(400).send({errors});

        return;
    }
    
    let query = `
        INSERT INTO tb_category (id, name, description, image)
        VALUES (
            '${body.id}',
            '${body.name}',
            '${body.description}',
            '${body.image}'
        );
    `;

    await database.execute(query);

    res.send(body);
});

app.delete('/categories/:id', async (req, res) => {
    let query = `DELETE FROM tb_category WHERE id='${req.params.id}'`;

    database.execute(query);

    res.sendStatus(204);
});

module.exports = app;
