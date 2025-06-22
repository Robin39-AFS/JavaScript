// Here we leran about callback functions in JavaScript.

// A callback function is a function that is passed as an argument to another function and is executed after some operation is completed. This allows for asynchronous programming and helps in managing tasks that take time, such as API calls or event handling.

// var para = function a() {
//     console.log("This is a callback function executed after 5 seconds.");

// }

// x(y);
// function y() {
//     console.log("y");
// }
// function x(y){
//     console.log("x");
//     y();
// }

// setTimeout(x, 5000, y); // This is the big achievement of callback function. Here x is a function and i create a callback function y and pass it as an argument to x. so it's a callback function.
// Now i try setTimeout, we know setTimeout need one function which is callback function and a time in milliseconds.

// That is a callback function example. From para function to setTimeout function. The para function is passed as an argument to setTimeout, which will execute it after 5 seconds.
// Another example of a callback function is when you pass a function as an argument to another function, like in the x and y functions above. The y function is passed as an argument to the x function, which calls it after logging "x".
// This allows for more flexible and dynamic programming patterns, as you can define the behavior of a function at runtime by passing different callback functions.

// setTimeout(function(){
//     console.log("Timer expired! This is a callback function executed after 5 seconds.");

// }, 5000);

// function x(y) {
//     console.log("x");
//     y();
// }

// x(
// function y() {
//     console.log("y");
// });

// JavaScript is a synchronous language and single-threaded, meaning it can only execute one task at a time. However, it can handle asynchronous operations using callbacks, promises, and async/await. This allows JavaScript to perform tasks like fetching data from a server or waiting for user input without blocking the main thread, enabling a more responsive user experience.
// In summary, callbacks are a powerful feature of JavaScript that allow you to write asynchronous code and manage tasks that take time. They enable you to define the behavior of a function at runtime by passing different functions as arguments, making your code more flexible and dynamic.
// Callbacks are essential for handling asynchronous operations in JavaScript, allowing you to execute code after a certain task is completed without blocking the main thread. This is particularly useful for tasks like API calls, event handling, and timers, where you want to perform actions once the operation is finished.
// Callbacks can be used in various scenarios, such as event listeners, where you want to execute a function when a specific event occurs, or in functions like `setTimeout`, where you want to delay the execution of a function.

// However, using too many nested callbacks can lead to "callback hell," making the code difficult to read and maintain. To avoid this, you can use promises or async/await syntax, which provide a more structured way to handle asynchronous operations and improve code readability.

// Blocking the main thread means that the JavaScript engine cannot execute any other code until the current task is completed. This can lead to a poor user experience, especially in web applications, where users expect immediate feedback and responsiveness. To prevent blocking, JavaScript uses asynchronous programming techniques like callbacks, promises, and async/await, allowing it to perform tasks in the background while keeping the main thread free for user interactions.
// In summary, callbacks are a fundamental part of JavaScript that enable asynchronous programming, allowing you to write code that can handle tasks that take time without blocking the main thread. They are essential for creating responsive and interactive applications, but care should be taken to avoid excessive nesting, which can lead to complex and hard-to-maintain code.

// Now About Event Listeners and how they work with callbacks in JavaScript:

// First we add a button to the HTML file with an id of "clickMe" then write the following JavaScript code:

// document.getElementById("clickMe")
// .addEventListener("click",function xyz(){
//     console.log("Button Clicked!");

// });

// When the button with the id "clickMe" is clicked, the event listener will trigger the callback function, which can contain any code you want to execute in response to the click event. This allows you to create interactive web applications that respond to user actions.

// Now with again closure

// Now say how many time button is clicked how to do?
// We can do as following code:

// let count = 0;
// document.getElementById("clickMe")
// .addEventListener("click",function xyz(){
//     console.log("Button Clicked!", ++count);

// });

// Upper code is ok but it's not good practice to use global variable like count. So we can use closure to hide the count variable and make it private.

function attachEventListener() {
  let count = 0;
  document.getElementById("clickMe").addEventListener("click", function xyz() {
    console.log("Button Clicked!", ++count);
  });
}
attachEventListener();
// This way, the count variable is private to the attachEventListener function and cannot be accessed from outside. Each time the button is clicked, the count variable is incremented and logged to the console, but it remains hidden from the global scope.


// Here we see event Listener in dev tools element how event listener is attached to the button element. and there we see handler function that we passed as a callback function to the event listener. and there also scope chain is shown which is the closure. and we can see the count variable in the closure scope chain.

// Here we talk about Garbage Collection and removeEventListener:
// First we have to know that eventListener are heavy and they can cause memory leaks if not removed properly. So we have to remove the event listener when it's no longer needed.

// as we see event listener have closure so it takes memory as we and we don't know when the event listener is no longer needed. So we have to remove it manually.
