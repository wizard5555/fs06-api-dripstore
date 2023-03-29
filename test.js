const {faker} = require('@faker-js/faker/locale/pt_BR');


let name = 'chiquim da silva';
let i = 69;
let email = faker.internet.email(
    name.toLowerCase(), 
    i
);

console.log(
    email
)
