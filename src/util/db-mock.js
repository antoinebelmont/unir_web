const  { faker } = require('@faker-js/faker');
const fs = require('node:fs');

function createRandomUser() {
    return {
        id: faker.string.uuid(),
        name: faker.person.fullName(),

    }
}
function createRandomProduct(){
    return {
        id: faker.number.int({max: 100}),
        image: faker.image.urlLoremFlickr(),
        name: faker.commerce.product(),
        description: faker.commerce.productDescription(),
        brand: faker.vehicle.manufacturer(),
        type: faker.commerce.productMaterial(),
        price: faker.commerce.price(),
        stock: faker.number.int({ max: 100}),
    }
}

const users = faker.helpers.multiple(createRandomUser, { count: 2,});
const products = faker.helpers.multiple(createRandomProduct, { count: 6})

const database = JSON.stringify({
    'users': users,
    'products': products,
})

fs.writeFile('src/util/database.json', database, err => {
    if(err){
        console.error(err)
    }
})