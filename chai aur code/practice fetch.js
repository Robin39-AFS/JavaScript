const data = fetch('https://dummyjson.com/users')
.then(value => {
    return value.json();
}).then(value => {
    return value.users;
});

data.then(users =>{
    for (const element of users) {
        console.log(`Name: ${element.firstName} ${element.lastName}, Email: ${element.email}`);
    }
})