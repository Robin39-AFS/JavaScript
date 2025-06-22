// JavaScript Program is run a global execution context is created, and this global execution context is then pushed into the call stack, 
// function a(){
//      console.log("a");
// }
// a();
// console.log("end");
// now this whole code will run line by line over here, as we move into the first line, this is the function definition of a so a will be allocated memory. and this function will be stored/ now after in line 5 will go and there a() is function invocation, in case of a function invocation a execution context is created for this function a to execute the code of this function. and this execution context is pushed into the call stack. so no a will be inside the call stack here now the code of this function will be executed line by line. so first console.log("a") will be executed and it will print a in the console. now after this function is executed, this execution context is popped out of the call stack and now we are back to the global execution context. and now we will go to the next line which is console.log("end") and it will print end in the console. so the final output will be a and end.

// Suppose in our JavaScript code which in running over here inside the callstack, we need access to these superpowers of the browser , suppose we to access to this timer, this page which is being rendered, this url, this local storage, or the bluetooth, or the geolocation, or the camera, or the microphone, or the notifications, or the web workers, or the service workers, or the web sockets, or the fetch API, or the XMLHttpRequest API, or the WebAssembly API, or the WebGL API, or the WebRTC API, or the Web Audio API, or the Web Cryptography API, or the Web MIDI API, or the Web Bluetooth API, or the Web NFC API, or the WebUSB API, or the Web Serial API, or the Web Share API, or the WebXR API, or the WebGPU API so we need to have that kind of an connection , this js engine needs some way to access those superpowers of the browser,  so to access those superpowers of the browser, we need web APIs.

// setTimeout is not part of the JavaScript language itself, but rather a feature provided by the browser's Web APIs. When you call setTimeout, it doesn't block the execution of your code. Instead, it registers a timer with the browser and continues executing the rest of your code. Once the timer expires, the browser adds the callback function to the event queue, which will be processed when the call stack is empty.


// So the Web APIs are like a bridge between the JavaScript code and the browser's superpowers. They allow JavaScript to interact with the browser and perform tasks like making network requests, manipulating the DOM, handling events, and more. When you use a Web API, you're essentially asking the browser to do something for you, and it will handle that task asynchronously while your JavaScript code continues to run.

// We will get it inside this call stack because of the global object, which is the window object in the browser. 

// If we do a window.setTimeout, it will be the same as setTimeout. it will give access to this timer in javascript.
// So, the Web APIs are like a set of tools that JavaScript can use to interact with the browser and perform tasks that are not part of the core JavaScript language. They allow JavaScript to access the browser's features and capabilities, enabling developers to create dynamic and interactive web applications.

/*
Web APIs are
1. setTimeout
2. setInterval
3. DOM APIs
4. fetch(https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
5. XMLHttpRequest
6. Local Storage
7. Session Storage
8. console
9. Geolocation
10. Location
*/


// console.log("Start");

// setTimeout(function cb(){
//     console.log("Callback");
// }, 5000);

// console.log("End");

// in this code gec is created and access the console and the when settimeout call in setTimeout the callback function is not pass it basically register a callback over the under web apis. and it also pass the delay it also start the time of 5000 miliseconds inside the timer. js code moves to the next line does wait for anything. fun thing is the gec is also pop out and the timer still running. now after complete the time we need somehow send this call back function in the call stack.

// And here comes the event loop and the callback queue. as callback function doesn't go into call stack directly it's go into the callback queue. 


// Event loop have just one job and its only jobs is to like continuously monitor the call stack as well as the callback queue.

// This event loop sees that there is also a function waiting to be executed inside this callbakc queue it just takes this function and just push it inside the call stack.

// Fetch is different case it doesn't work like setTimeout or eventListener. 

// console.log("Start")

// setTimeout(function cdT(){
//     console.log("CB SetTimeout"); 
// }, 5000);

// fetch("https://api.netflix.com")
// .then (function cbF(){
//     console.log("CB Netflix");
// });

// console.log("End");

// In this code cbT and CbF is store in web APIs suppose cbF complete in 50ms so which one will call stack first. here another is microtask queue it's exectly same as callback queue but it's higher priority.

// the cbF is callback function but in case of promises in case of this network call will go to this micro task queue.

// Here is question 
// What can come inside this micro task queue
// All they call back function which comes through promises. and there is something know as mutation observer. so mutation observer, basically keeps on checking in whether there is some mutation in the dom tree or not. if there is some mutation is the dom tree it can execute some call back function 

// New thing starvation have to read.

