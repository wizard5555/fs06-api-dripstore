const database = require('../connection/database');

async function find(table, id) {
    let sql = `SELECT * FROM ${table} WHERE id='${id}'`;

    let data = await database.execute(sql);

    return data[0];
}

async function findAll(table, columns) {
    let projection = '*';

    if (columns && columns.length > 0) { 
        projection = columns.join(', '); 
    }

    let data = await database.execute(sql);

    return data;
}

module.exports = {
    findAll,
    find,
};
