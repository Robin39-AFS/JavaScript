// Here we learn about first class functions in JavaScript and Anonymous functions, which are functions that do not have a name. They can be assigned to variables, passed as arguments to other functions, or returned from functions. This allows for more flexible and dynamic programming patterns.

// Function Statement and Functionn Declaration are the same.
/*
function a (){
    console.log("Hello from function a");
}

a();
*/

// Function Expression 
/*
assigning a function to a variable is called function expression.

var b = function() {
    console.log("Hello from function b");
};

b();

*/

// Now what is the difference between function statement and function expression?
// It's acctually is hoisting. cause if we call the function a() and b() before the function statement and function expression respectively, then it will throw an error for function b() but not for function a().
// reason is we know a is hoisted but b is like a variable so in memory execution phase it is undefined. and the value of function b is assigned in code execution phase.`


// Anonymous Function
// An anonymous function is a function that does not have a name. 
// So if you just write a function without it's name it will throw an error cause you have to assign it ti a variable. and when we use an anonymous function, when it treat like a value, it is called a function expression.
// For example, you can use an anonymous function as an argument to another function or return it from a function.

// Nmamed Function Expression

var b = function xyz() {
    console.log("Hello from named function b");
    console.log(xyz); // This will print the function definition of xyz
    
}
// xyz();  this will throw an error it's reference error. but we can call it inside the function b() because it is in the same scope. and it is in local scope of function b(). not outer in global scope.

b(); // This will work, but you cannot call xyz() outside of this scope.

// Difference between Parameters and Arguments

// Parameters are the variables listed in a function's definition, while arguments are the actual values passed to the function when it is called. function recives value is parameters and when we call or invoke the function we pass value it's arguments.

// First Class Functions
// it's kind passing functions as arguments, returning functions from other functions, and assigning functions to variables. In JavaScript, functions are first-class citizens, meaning they can be treated like any other value. This allows for powerful programming patterns such as higher-order functions, callbacks, and functional programming techniques.

// var b = function (params) {
//     console.log(params);
// }

// function xyz (){

// }

// b(xyz);

// Ability of function is known as first-class functions in JavaScript. This means that functions can be treated like any other value, allowing them to be passed as arguments, returned from other functions, and assigned to variables.

// Function are first-class citizens is same as First Class Functions in JavaScript. 


// Arrow Functions

