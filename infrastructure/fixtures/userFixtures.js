const database = require('../connection/database');
const {v4} = require('uuid');
const {faker} = require('@faker-js/faker/locale/pt_BR');
const argon2 = require('argon2');

async function createUsers() {
    for (let i = 1; i <= 100; i++) {
        let name = faker.name.fullName();
        let email = faker.internet.email(
            name.toLowerCase(), 
            i
        );
        let pass = await argon2.hash('123456');

        let sql = `
            INSERT INTO tb_user 
                (id, name, email, password)
            VALUES
                ('${v4()}', '${name}', '${email}', '${pass}')
        `;

        database.execute(sql);
    } 
}

createUsers()
    .then(() => {
        console.log('PRONTO, 100 usuarios inseridas');
    })

