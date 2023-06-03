var me =  {
    name: 'Henrique',
    age: 17
}

function checkAge (person) {
    console.log('Sua idade é: ' + person.age)

    if (person.age >= 18) {
        console.log ('Você é maior de idade')
    }
    else {
        console.log('Você não tem idade')
    }
}

checkAge(me)