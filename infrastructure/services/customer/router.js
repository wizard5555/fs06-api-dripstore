const app = require('express').Router();
const database = require('../../connection/database');

app.get('/customers', async (req, res) => {
    let data = await database.execute('SELECT * FROM tb_customer');

    res.send(data);
});

app.get('/customers/:id', async (req, res) => {
    let data = await database.execute(`
        SELECT * FROM tb_customer WHERE id='${req.params.id}'
    `);

    res.send(data[0]);
});

module.exports = app;
