// LExical environment

// function a() {
//     console.log(b);
// }

// var b = 10;

// a();

// that will print b = 10


function a() {
    var b = 10;
    c();
    function c(){
        console.log(b);
    }
}

// console.log(b);

a();

console.log(b);
// We have to remember that when a function invoked new execution context create

// There also print b even we b declare b inside the function a but for this we can't access b in global scope but invoked a we can access b's value

// But if we declare b in a function and try to print then it will tell it's not defined in and it's actually scope

// Scope is directly dependent on the lexical environment

// Wherever an execution context is created a lexical environment is also created , 
// So, lexical environment is the local memory along with the lexical environment of it's parent 

// What is lexical it's a term means in hierarchy or in a sequence in code concept we can tell c() is lexically sitting inside a() function.

// This orange thing is pointing to the lexical environment of it's parent 

// Fun thing is the global execution has lexical parent reference to the null

// Searching in the lexical reference is called scope chain

