const data = fetch('https://dummyjson.com/users')
.then(value => {
    return value.json();
}).then(value => {
    return value.users;
});
