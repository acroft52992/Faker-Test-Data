const { faker } = require('@faker-js/faker');
faker.seed(123)


const users = Cypress._.range(0, 10).map((_, k) =>  {
return {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        id: k,
    }
})

console.table(users)

it.each(users)(
(user, k) => `user ${k+1} ${user.firstName}`, 
(user) => {

})