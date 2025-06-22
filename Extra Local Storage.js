// Today we study about local storage in JavaScript

// Local storage is a way to store data in the browser that persists even after the page is closed or the browser is restarted. It allows you to save key-value pairs in a web application, making it easy to store user preferences, settings, or any other data that needs to be retained across sessions.

// Local storage is part of the Web Storage API and is accessible through the `localStorage` object in JavaScript. It provides a simple way to store data as strings, and you can use methods like `setItem`, `getItem`, `removeItem`, and `clear` to manage the stored data.
// Local storage is synchronous, meaning that reading and writing data is done immediately, and it has a storage limit of about 5-10 MB per origin (domain).

// Local storage is a key-value store, where you can store data as strings. You can use JSON.stringify() to convert objects or arrays into strings before storing them, and JSON.parse() to convert them back into their original form when retrieving them.


 let name = "Robin";

//  console.log(name);

// Storing data in local storage which name and what is the value of name

 localStorage.setItem("name", name);

// Clear the local storage
 
localStorage.clear();

// If we have local storage then how to get their value?

 localStorage.setItem("Name", "Robin39");

 console.log(localStorage.getItem("Name"));

localStorage.setItem("Name1", "Afsar");

// Now we have two local storage value, how to get all the keys of local storage?

const keys = Object.keys(localStorage); // This will give us an array of all the keys in local storage
console.log(keys); 

// Now we can loop through the keys and get the values of each key
keys.forEach((key) => {
    console.log(`${key}: ${localStorage.getItem(key)}`);
});

for(let i = 0; i < keys.length; i++){
    console.log(`${keys[i]} = ${localStorage.getItem(keys[i])}`);
}

// Now we can remove a specific key from local storage
localStorage.removeItem("Name1"); // This will remove the key "Name1" from local storage

// Now we can check if a key exists in local storage
if (localStorage.getItem("Name1")) {
    console.log("Name1 exists in local storage");
} else {
    console.log("Name1 does not exist in local storage");
}
// Now we can clear all the local storage
localStorage.clear(); // This will clear all the local storage

// localStorage.setItem("Mango", "Fruit");
// Now we can check if local storage is empty
if (localStorage.length === 0) {
    console.log("Local storage is empty");
}
else {
    console.log("Local storage is not empty");
}

// Now we can store an object in local storage
const user = {
    name: "Robin",
    age: 25,
    city: "Dhaka"
};

// We can use JSON.stringify() to convert the object into a string before storing it
localStorage.setItem("user", JSON.stringify(user));

// Now we can retrieve the object from local storage and parse it back into an object
const storedUser = JSON.parse(localStorage.getItem("user"));
console.log(storedUser); // This will print the object { name: "Robin", age: 25, city: "Dhaka" }

// Now we can update the object in local storage
storedUser.age = 26; // Update the age property
localStorage.setItem("user", JSON.stringify(storedUser)); // Store the updated object back in local storage

// Now we can retrieve the updated object from local storage
const updatedUser = JSON.parse(localStorage.getItem("user"));
console.log(updatedUser); // This will print the updated object { name: "Robin", age: 26, city: "Dhaka" }

// Now we can remove the object from local storage
localStorage.removeItem("user"); // This will remove the key "user" from local storage
// Now we can check if the object exists in local storage
if (localStorage.getItem("user")) {
    console.log("User exists in local storage");
} else {
    console.log("User does not exist in local storage");
}

// Now we can clear all the local storage
localStorage.clear(); // This will clear all the local storage
// Now we can check if local storage is empty
if (localStorage.length === 0) {
    console.log("Local storage is empty");
}
else {
    console.log("Local storage is not empty");
}
// Local storage is a great way to store data in the browser that persists across sessions, but it is important to remember that it is not secure and should not be used to store sensitive information like passwords or credit card numbers. Always use secure methods for storing sensitive data.
// In conclusion, local storage is a powerful feature of modern web browsers that allows developers to store data on the client side. It provides a simple and efficient way to manage user preferences, settings, and other data that needs to persist across sessions. However, it is important to use it wisely and avoid storing sensitive information.
// Always remember to clear local storage when it is no longer needed to free up space and avoid potential security risks.

// Now we use array to store multiple objects in local storage
const users = [
    { name: "Robin", age: 25, city: "Dhaka" },
    { name: "Afsar", age: 30, city: "Chittagong" },
    { name: "John", age: 28, city: "New York" }
];

// We can use JSON.stringify() to convert the array into a string before storing it
localStorage.setItem("users", JSON.stringify(users));

// Now we can retrieve the array from local storage and parse it back into an array
const storedUsers = JSON.parse(localStorage.getItem("users"));
console.log(storedUsers); // This will print the array of objects
// Now we can loop through the array and print each user
storedUsers.forEach((user) => {
    console.log(`Name: ${user.name}, Age: ${user.age}, City: ${user.city}`);
});
// // Now we can update a specific user in the array

storedUsers[0].age = 26; // Update the age of the first user
localStorage.setItem("users", JSON.stringify(storedUsers)); // Store the updated array back in local storage

// Now we can retrieve the updated array from local storage
const updatedUsers = JSON.parse(localStorage.getItem("users"));
console.log(updatedUsers); // This will print the updated array of objects

// Now we can remove a specific user from the array
const userToRemove = "Afsar"; // The name of the user we want to remove
const filteredUsers = updatedUsers.filter(user => user.name !== userToRemove); // Filter out the user we want to remove

localStorage.setItem("users", JSON.stringify(filteredUsers)); // Store the filtered array back in local storage

// Now we can retrieve the filtered array from local storage
const retrievedFilteredUsers = JSON.parse(localStorage.getItem("users"));
console.log(retrievedFilteredUsers); // This will print the filtered array of objects
