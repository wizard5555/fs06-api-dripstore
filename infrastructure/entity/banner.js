const { DataTypes } = require('sequelize');
const orm = require('../connection/orm');

//vai criar a tabela no banco com essa estrutura
const Banner = orm.define('banner', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING
    },
    image: {
        type: DataTypes.STRING
    }
});

orm.sync().then(() => {
    console.log('pronto, tabela banners atualizada');
});

module.exports = Banner;
