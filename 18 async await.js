// Here we learn Async Await in JavaScript
// Async functions always return a promise
// Await can only be used inside async functions

// if async function return a value, it will be wrapped in a promise and return a promise we accesss with .then()

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello World from p1");
  }, 5000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello World from p2");
  }, 10000);
});

// async function getData(){
//     return p;
// }

// const dataPromise = getData();
// dataPromise.then(data => {
//     console.log(data);
// });
// // Same as above this is with promise and previous one is with async function
// p.then(data => {
//     console.log(data);
// });

async function handlePromise() {
  console.log("I am first");
  setTimeout(async () => {
      const data = await p1; // Waits for the promise to resolve
      console.log("I am second");
      // The code below will execute after the promise is resolved
      console.log(data); // This will log "Hello World" after 5 seconds
    console.log("I am after 10 seconds");
  }, 10000);

  setTimeout(() => {
    console.log("I am after 8 seconds");
  }, 8000);
  console.log("I am third");
  const data2 = await p2; // Waits for the promise to resolve again
  console.log(data2); // This will log "Hello World" will print immediately.
  console.log("I am fourth");
}
console.log("I am before the promise");

handlePromise(); // how js engine handle first one is print and promise called but when it see await suspends the execution of the function until the promise is resolved

console.log("I am after the promise");


/// Real async await example

const API_URL = "https://api.github.com/users/Robin39-AFS";

async function fetchData(){

    const data = await fetch(API_URL); // Fetching data from the API
    const jsonData = await data.json(); // Parsing the response as JSON

    /// Now how fetch work?
    // fetch returns a promise that resolves to the Response object representing the response to the request
    // The Response object contains the response data, headers, and other information about the request
    // The json() method of the Response object returns a promise that resolves to the result of parsing the response body text as JSON
    // So we need to await both the fetch and the json() method to get the final
    console.log(jsonData); // Logging the parsed JSON data
}

fetchData(); // Calling the async function to fetch and log the data

/// For handaling errors in async functions, we can use try-catch blocks

/// or we can use .catch() method on the promise returned by the async function

/// Interview Question:

/// What is async/await in JavaScript?
/// Async is a keyword that is used to define an asynchronous function.
/// Await is a keyword that is used to wait to handle a promise to resolve or reject.
/// Async functions always return a promise.

/// What is the difference between async/await and promises?
/// Async/await is a syntactic sugar over promises that makes asynchronous code look synchronous.
/// Async/await is easier to read and write than promises.
/// Async/await allows us to write asynchronous code in a more synchronous way, making it easier to understand and maintain.