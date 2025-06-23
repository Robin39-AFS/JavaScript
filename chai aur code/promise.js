const promiseOne = new Promise(function (resolve, reject) {
  // We use promise to handle asynchronous operations
  // DB calls, API calls, cryptography, network requests, etc.
  setTimeout(() => {
    console.log("Task 1 completed");
    resolve(); // Resolve the promise after 1 second
  }, 1000);
});

// to connect the resolve we have to invoked the resolve function in the promise
// and then we can use the .then() method to handle the resolved value
// If the promise is rejected, we can use .catch() to handle the error

// This way we consume the promise
// We can also use async/await to handle promises in a more readable way.
promiseOne.then(function () {
  console.log("This one is from resolve");
});

// Another example of a promise, here we complete full without using other variables
new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Task 2 completed");
    resolve(); // Resolve the promise after 2 seconds
  }, 2000);
}).then(() => {
  console.log("This one is from task 2 resolve");
});

// another example of a promise with passing a value to the resolve function

promiseThree = new Promise((resolve, reject) => {
  setTimeout(function () {
    console.log("Task 3 completed");
    resolve([{ name: "Robin", email: "robin@mail.com", age: 26 }]); // Resolve the promise with a value
  }, 3000);
});

promiseThree
  .then((data) => {
    console.log("This one is from task 3 resolve");
    console.log(data); // Access the resolved value
    return data[0]; // Return the resolved value to the next then or next then can't access the data
  })
  .then((data) => {
    const userName = data.name; // Accessing the name property from the resolved value
    console.log(userName);
  });

// Another example of a promise with reject

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false; // Simulating an error condition
    if (error) {
      reject("Error occurred in Task 4"); // Reject the promise with an error message
    } else {
      resolve([{ name: "Robin", email: "robin@mail.com", age: 26 }]); // Resolve the promise if no error
    }
  }, 4000);
});

promiseFour
  .then((data) => {
    console.log("This one is from task 4 resolve");
    console.log(data); // Access the resolved value
    return data[0]; // Return the resolved value to the next then
  })
  .then((data) => {
    const userEmail = data.email; // Accessing the email property from the resolved value
    console.log(userEmail);
  })
  .catch((error) => {
    console.log("This one is from task 4 reject");
    console.log(error); // Access the error message
  })
  
  .finally(() => {
    console.log("This will always run, regardless of success or failure");
  });

// Another example of a promise with a longer timeout to simulate a task that takes 5 seconds
// we will handel this promise with async/await syntax
// This is a more modern way to handle promises and makes the code more readable
// Async/await is a way to write asynchronous code that looks synchronous

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(()=>{
        let error = false; // Simulating an error condition
        if (error) {
            reject("Error occurred in Task 5"); // Reject the promise with an error message
        } else {
            resolve({username : "Task 5 User", password: "Task 5 Password"}); // Resolve the promise if no error
        }
    }, 5000);
});

// There error is not nessary to handle in the async function. but it is a good practice to handle errors. but if we use promise there must be a catch block to handle the error.
// that is difference between async/await and promise.then() method
// if there is no error then we don't need to handle the error in the async function. but in promise.then() method we must handle the error in the catch block.

async function consumePromiseFive() {
    try {
        const response = await promiseFive; // Wait for the promise to resolve
        console.log("This one is from task 5 resolve");
        console.log(response); // Access the resolved value
    } catch (error) {
        console.log(error); // Handle the error if the promise is rejected
    }
}

consumePromiseFive();

// Let's try to fetch data from an API using promises
// This is a real-world example of using promises to handle asynchronous operations

async function getAllUsers() {
    const url = "https://dummyjson.com/users"; // URL to fetch data from
    const response = await fetch(url); // Fetch the data from the API
    try {
        const data = await response.json(); // Parse the response as JSON
        console.log("Data fetched successfully");
        // console.log(data); // Log the fetched data
        const value = data.users[0].id; // Access the users array from the fetched data
        console.log(value); // Log the users array
    } catch (error) {
        console.log("Error fetching data");
        console.log(error); 
    }
}
//if we use async/await we don't need to use .then() method to handle the promise
// If we want to use .then() method we can do it like this. 
// and must be call the function to execute the code
getAllUsers(); // Call the function to fetch data

fetch("https://dummyjson.com/users")
.then(async(response) =>{
    console.log("Data fetched successfully");
    // return response.json(); // Parse the response as JSON
    const data = await response.json(); // Parse the response as JSON
    console.log(data.users[2].id); // Log the fetched data
})
// .then((data) => {
//     console.log(data.users[2].id); // Access the users array from the fetched data
// })
.catch((error) =>{
    console.log("Error fetching data");
    console.log(error);
})
.finally(() =>{
    console.log("Fetch operation completed");
});