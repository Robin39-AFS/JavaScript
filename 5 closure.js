// Here we learn about closure in JavaScript. Closure is a function that has access to its own scope, the outer function's scope, and the global scope. This allows the inner function to remember the environment in which it was created.
// Closure is created when a function is defined inside another function, and the inner function has access to the outer function's variables. This allows the inner function to "remember" the environment in which it was created, even after the outer function has finished executing.

// In our word, Closure is a function together like a bundled with its lexical environment or closure along with it's lexical scope togther bundled is known as closure. it forms a closure function along with its lexical environment.
// Let's see an example of closure in JavaScript:
// function x(){
//     var a = 7;
//     function y(){
//         console.log(a); // 7, because y has access to a in the outer function x's scope. lexical scoping.
//     }
//     y();
// }
// x();

// In this example, we have a function x() which has a variable a declared with var. Inside the function x(), we have another function y() which is defined. When we call the function y(), it will print 10 because it has access to the variable a in the outer function x's scope.
// This is how closure works in JavaScript. The inner function y() has access to the outer function x()'s variables, and it can "remember" the environment in which it was created, even after the outer function has finished executing.

// Function are heart of JavaScript, we can grab a function into a variable and we can pass a function as an argument to another function parameter, we can return a function from another function, and we can create a function inside another function. This is how closure works in JavaScript.

// function x(){
//     var a = 7;
//     function y(){
//         console.log(a);
//     }
//     return y; // Here we are returning the function y, which is a closure.
// }

// var z = x();
// in there x is invoked by z so x execution context is created and as javascript is asynchronous so x execution context is finished and it is removed from the call stack, but the function y is still in memory because it is a closure and it has access to the variable a in the outer function x's scope.

// now we have to understand as y is return so how it behave in other lexical scope now. as we write more than 100 line code and then we call z() and we know x in finished execution context so how it is able to access the variable a in the outer function x's scope. but it will print 7. and here is the fun as nothing is in the call stack so it will not throw any error. cause this is closure and when we return just y . it doesn't just return y it's bundled with its lexical environment or closure along with it's lexical scope together bundled and returned in z variable. So, when we call z(), it will still have access to the variable a in the outer function x's scope, even though x has finished executing. and again function along with its lexical scope that was retrun when we return y. so if we call z() some where in the code it will remember the environment in which it was created, and it will still have access to the variable a in the outer function x's scope.

//console.log(z); // This will print the function y, which is a closure.
//z(); // This will print 7, because z is a closure and it has access to the variable a in the outer function x's scope.

// function x(){
//     var a = 7;
//     function y(){
//         console.log(a); // 10, because y has access to a in the outer function x's scope. lexical scoping.
//     }
//     var a = 100; // for this y is not return or access value of a it's access the reference of a in the outer function x's scope. so it will print 100.
//     return y; // Here we are returning the function y, which is a closure.
// }

// var z = x();
// console.log(z);

// z();

function z() {
  var b = 900;
  function x() {
    var a = 7;
    function y() {
      console.log(a, b); // 7, because y has access to a in the outer function x's scope. lexical scoping.
    }
    y();
  }
  x();
}

z(); // This will print 7, 900, because y has access to a in the outer function x's scope and b in the outer function z's scope.
// In this example, we have a function z() which has a variable b declared with var. Inside the function z(), we have another function x() which has a variable a declared with var. Inside the function x(), we have another function y() which is defined. When we call the function y(), it will print 7, 900 because it has access to the variable a in the outer function x's scope and b in the outer function z's scope.


// Here learn where uses of closures:
/*
1. Module Design Pattern: Closures are used to create private variables and methods in JavaScript, allowing for encapsulation and data hiding. This is often used in module design patterns to create modules with private state.
2. Currying: Closures are used in currying, which is a technique of transforming a function with multiple arguments into a sequence of functions that each take a single argument. This allows for partial application of functions and can lead to more reusable and composable code.
3. Functions like onece: Closures are used to create functions that can only be called once, such as the `once` function in the Underscore.js library. This allows for creating functions that can only be executed a single time, which can be useful in certain scenarios.
4. Memoize: Closures are used to create memoized functions, which cache the results of expensive function calls and return the cached result when the same inputs occur again. This can significantly improve performance in scenarios where the same function is called multiple times with the same arguments.
5. Maintaining State in async world: Closures are used to maintain state in asynchronous programming, allowing for the creation of functions that can access and modify variables in their outer scope even after the outer function has finished executing. This is particularly useful in scenarios where we need to maintain state across asynchronous operations, such as callbacks or promises.
6. setTimeouts and setIntervals: Closures are used in `setTimeout` and `setInterval` functions to maintain access to variables in the outer scope, allowing for delayed execution of code that can still access the variables defined in the outer function. This is often used to create timers or delayed actions in JavaScript.
7. Iterators: Closures are used to create iterators, which are functions that can be called repeatedly to produce a sequence of values. This allows for creating custom iteration logic and maintaining state across multiple calls to the iterator function.
8. Event Handlers: Closures are used in event handlers to maintain access to variables in the outer scope, allowing for the creation of event handlers that can access and modify variables defined in the outer function. This is often used in scenarios where we need to handle events and maintain state across multiple event triggers.
*/