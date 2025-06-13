// Q : let and const declarations are Hoisted ?
// yes , and here come temporal dead zone.

// let a = 10;
// console.log(a)
// var b = 100;

// we see when declare a as let it takes another memory instead of global
// Temporal dead is the time when this let variable was hoisted and till it is initialized some value. that time between that is known as temporal dead zone. 


// console.log(a)

// let a = 10;

// var b = 100;

// when we try to access a variable inside a temporal dead zone it's provide reference error.

// Here we know nice what is b is attached to window object and we can do window.b but we can do the same for a cause it doesn't attached with window it maintain separate storage which are for let and const not in global space. 

// we can't declare let a = 10 and then let a = 100 even we can't var a = 100 it will throw syntaxError . and when JavaScript throw syntaxError the code is rejected not even single line of code executed.


let a;

a = 10;

const b = 1000;

// const is more strict then let but it behaves the same way in hosting and a. we have initialized const when we declare or it will give syntaxError and we try to overwrite the value latter then it will give typeError

