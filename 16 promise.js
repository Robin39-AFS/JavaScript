// Here we learn about promises in JavaScript, which are used to handle asynchronous operations more effectively than callbacks. Promises allow us to write cleaner and more manageable code by avoiding callback hell and inversion of control issues.

// Promises represent a value that may be available now, or in the future, or never. They can be in one of three states: pending, fulfilled, or rejected.


// This one is callback hell example
// Cart: list of products selected by user
// const cart = ["Laptop", "Mouse", "Keyboard"];

// // Step 1: Function to create an order
// function createOrder(cartItems, callback) {
//   console.log("📦 Creating order for:", cartItems.join(", "));

//   setTimeout(() => {
//     if (cartItems.length === 0) {
//       console.log("❌ Cart is empty. Cannot place order.");
//       return;
//     }

//     const orderId = "ORD" + Math.floor(Math.random() * 1000);
//     console.log("✅ Order created. Order ID:", orderId);

//     // Pass result to the callback function
//     callback(orderId);
//   }, 1000);
// }

// // Step 2: Function to proceed with payment
// function proceedToPayment(orderId, callback) {
//   console.log("💳 Initiating payment for Order:", orderId);

//   setTimeout(() => {
//     const paymentStatus = "Payment successful for " + orderId;
//     console.log("✅", paymentStatus);

//     // Now pass payment result to callback
//     callback(paymentStatus);
//   }, 1000);
// }

// // Step 3: Function to show invoice
// function showInvoice(paymentStatus, callback) {
//   console.log("🧾 Generating invoice...");

//   setTimeout(() => {
//     const invoice = "Invoice Generated → " + paymentStatus;
//     console.log("✅", invoice);

//     // Next step callback
//     callback(invoice);
//   }, 1000);
// }

// // Step 4: Final success message
// function thankYou(invoice) {
//   console.log("🙏 Thank you for your purchase!");
//   console.log("📃", invoice);
// }

// // Glue: Putting everything together with callback hell
// function placeOrder(cart) {
//   createOrder(cart, function(orderId) {
//     proceedToPayment(orderId, function(paymentStatus) {
//       showInvoice(paymentStatus, function(invoice) {
//         thankYou(invoice); // Final step
//       });
//     });
//   });
// }

// // Call the main function
// placeOrder(cart);


// // Solve with Promises

// // Cart items
// // const cart = ["Laptop", "Mouse", "Keyboard"];

// // Step 1: Create order with Promise
// function createOrder(cartItems) {
//   return new Promise((resolve, reject) => {
//     console.log("📦 Creating order for:", cartItems.join(", "));

//     setTimeout(() => {
//       if (cartItems.length === 0) {
//         reject("❌ Cart is empty. Cannot place order.");
//         return;
//       }

//       const orderId = "ORD" + Math.floor(Math.random() * 1000);
//       console.log("✅ Order created. Order ID:", orderId);
//       resolve(orderId); // Send orderId to next step
//     }, 1000);
//   });
// }

// // Step 2: Proceed to payment with Promise
// function proceedToPayment(orderId) {
//   return new Promise((resolve, reject) => {
//     console.log("💳 Initiating payment for Order:", orderId);

//     setTimeout(() => {
//       const paymentStatus = "Payment successful for " + orderId;
//       console.log("✅", paymentStatus);
//       resolve(paymentStatus);
//     }, 1000);
//   });
// }

// // Step 3: Show invoice with Promise
// function showInvoice(paymentStatus) {
//   return new Promise((resolve, reject) => {
//     console.log("🧾 Generating invoice...");

//     setTimeout(() => {
//       const invoice = "Invoice Generated → " + paymentStatus;
//       console.log("✅", invoice);
//       resolve(invoice);
//     }, 1000);
//   });
// }

// // Step 4: Final thank-you message
// function thankYou(invoice) {
//   console.log("🙏 Thank you for your purchase!");
//   console.log("📃", invoice);
// }

// // Glue everything together using Promises
// function placeOrder(cart) {
//   createOrder(cart)
//     .then(proceedToPayment)
//     .then(showInvoice)
//     .then(thankYou)
//     .catch((error) => {
//       console.log("⚠️ Error:", error);
//     });
// }

// // Start the process
// placeOrder(cart);

// here are differnce between callback and promise
// 1. Callbacks are functions passed as arguments to other functions, while promises are objects representing the eventual completion (or failure) of an asynchronous operation.
// 2. Callbacks can lead to callback hell (nested callbacks), making code hard to read, while promises allow chaining with `.then()` and `.catch()` methods, improving readability.
// 3. Callbacks execute immediately when the operation completes, while promises can be in pending, fulfilled, or rejected states, allowing for better error handling and control flow.

// In programming, both callbacks and promises are used to handle asynchronous operations, but they do so in fundamentally different ways in terms of control, structure, and reliability.

// A callback is a function passed as an argument to another function, which will be called once the task completes. This approach gives the main control to the function that performs the task. While this works, it introduces a problem called inversion of control, where we depend on the external function to decide when, how, or even if our callback gets called. This dependency can cause bugs if the function forgets to call the callback, calls it multiple times, or calls it with the wrong data. Moreover, if multiple asynchronous tasks are chained together using callbacks, the code becomes deeply nested and hard to read — a situation known as callback hell.

// Promises, on the other hand, solve these problems by providing a structured way to handle asynchronous results. A promise represents a future value that may be fulfilled (successful) or rejected (failed). When a promise is created, it starts in a pending state and automatically transitions to either fulfilled or rejected once the task completes. The main benefit is that the flow of logic stays under the programmer's control. Instead of passing a function to be executed later, the developer creates a promise and attaches .then() and .catch() handlers to define what should happen when the promise resolves or fails. This creates a flat, readable chain of actions and ensures errors can be handled in a unified, predictable way.

// Therefore, while both approaches handle asynchronous code, callbacks hand over control, increasing risk and reducing clarity, whereas promises preserve control, improve readability, and provide a reliable state-based mechanism for managing asynchronous logic.

// Let's dive deep into promises and how they work in JavaScript. with devtools and console.


const url = "https://api.github.com/users/Robin39-AFS"; // URL to fetch data from

const user = fetch(url);

user.then((data => {
    return data.json();
})).then((userData) => {
    console.log(userData);
}).catch((error) => {
    console.error("Error fetching user data:", error);
});



// Promise is a object which eventually resolve or reject the asynchronous operation.