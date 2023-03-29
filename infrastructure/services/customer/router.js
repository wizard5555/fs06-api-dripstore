const app = require('express').Router();
const database = require('../../connection/database');
const {DateTime} = require('luxon');
const repository = require('../../repository/abstractRepository');

DateTime.local().setZone('America/Fortaleza');

app.get('/customers', async (req, res) => {
    let data = await database.execute('SELECT * FROM tb_customer');

    res.send(data);
});

app.get('/customers/:id', async (req, res) => {
    let data = await repository.find('tb_customer', req.params.id);

    res.send(data);
});

app.delete('/customers/:id', async (req, res) => {
    let data = await database.execute(`
        DELETE FROM tb_customer WHERE id='${req.params.id}'
    `);

    res.sendStatus(204);
});


app.patch('/customers/:id', async (req, res) => {
    let customer = req.body;

    let data = await database.execute(`
        UPDATE tb_customer 
        SET 
            name='${customer.name}', 
            email='${customer.email}', 
            phone='${customer.phone}' 
        WHERE
            id = '${req.params.id}'
    `);

    res.send(customer);
});


app.post('/customers', async (req, res) => {
    let customer = req.body;

    customer.created_at = DateTime.now().toFormat('yyyy-MM-dd HH:mm:ss');

    let data = await database.execute(`
        INSERT INTO tb_customer (id, name, email, phone, created_at)
        VALUES (
            '${customer.id}', 
            '${customer.name}', 
            '${customer.email}', 
            '${customer.phone}', 
            '${customer.created_at}'
        )
    `);

    res.send(customer);
});

module.exports = app;
