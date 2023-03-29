const app = require('express').Router();
const database = require('../../connection/database');
const validator = require('./validator');
const repository = require('../../repository/abstractRepository');

app.get('/categories', async (req, res) => {
    let token = req.headers.senha;

    if (token !== '123bolinha') {
        res.status(401).send({
            error: 'invalid token'
        });

        return;
    }

    let limit = req.query.limit || 10;
    let page = req.query.page || 1;
    let offset = (page - 1) * limit;
    let order = req.query.order || 'name'
    let asc = req.query.asc || 'asc';

    let data = await database.execute(`
        SELECT * FROM tb_category ORDER BY ${order} ${asc} LIMIT ${offset}, ${limit}
    `);

    res.send(data);
});

app.get('/categories/:id', async (req, res) => {
    let data = await repository.find('tb_category', req.params.id);

    res.send(data);
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
