const database = require('../connection/database');
const {v4} = require('uuid');
const {faker} = require('@faker-js/faker/locale/pt_BR');

for (let i = 1; i <= 100; i++) {
    let name = faker.commerce.department();
    let desc = faker.lorem.word(2);
    let image = faker.image.fashion();

    let sql = `
        INSERT INTO tb_category 
            (id, name, description, image)
        VALUES
            ('${v4()}', '${name}', '${desc}', '${image}')
    `;

    database.execute(sql);
} 

console.log('PRONTO, 100 categorias inseridas');
