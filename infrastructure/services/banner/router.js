const app = require('express').Router();
const Banner = require('../../entity/banner');
const orm = require('../../connection/orm');

app.get('/banners', async (req, res) => {
    let dados = await Banner.findAll();

    res.send(dados);
});

app.get('/banners/:id', async (req, res) => {
    let dados = await Banner.findByPk(req.params.id);

    res.send(dados);
});


module.exports = app;

