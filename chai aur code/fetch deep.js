// Today we learn about the `fetch` API in JavaScript, which is used to make network requests.
// The `fetch` API is a modern way to make HTTP requests and is built into the browser.
// It returns a promise that resolves to the response of the request.
// The `fetch` API is more powerful and flexible than the older `XMLHttpRequest` API.
// we can do get post all the methods using the `fetch` API.
// and fetch is web api and in it's store in micro task queue and it's priority is higher than the macrotask queue.
// so fetch work is done before the macrotask queue.

// response = fetch("something")
// it's divided into two parts. web browser or node.js for network request another is javascript engine for the memory reserve and execution of the code.

// in memory name is like data and they are array one name is onfulfilled we know this as resolve and another is on Rejection and known as reject. and there we can't push value directly. we can't access them. 
// we can only access them when the promise is resolved or rejected. and we can access them using then() method and catch() method.
