const app = require('express').Router();
const database = require('../../connection/database');

app.get('/categories', async (req, res) => {
    let data = await database.execute('SELECT * FROM tb_category');

    res.send(data);
});

app.get('/categories', async (req, res) => {
    let data = await database.execute('SELECT * FROM tb_category');

    res.send(data);
});


app.get('/categories/:id', async (req, res) => {
    let data = await database.execute(`
        SELECT * FROM tb_category WHERE id='${req.params.id}'
    `);

    res.send(data[0]);
});

module.exports = app;
