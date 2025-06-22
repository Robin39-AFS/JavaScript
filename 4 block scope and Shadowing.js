// We will know what is block and scope and block scoped are two different thing and we also learn shadowing
// in curly {} is know as block

{
    // Compound Statement, a block is used to combine multiple javascript statement into one group

    // var a = 10;
    // console.log(a);
    
    // We group multiple statement together in a block so that we can use it but where JS expects one statement
}

// if(true) this will give a error and syntax error this want a statement one statement but if we give multiple then we need to wrap or group so we use block and it is {}.

////////////// Let's talk about block scope ////////////////////

// Block Scope means what all variable and function means we can access inside this block

// {
//     var a = 10;
//     let b = 20;
//     const c = 30;
// }

// if debug we will see a is hoisted into the global scope and b and c is hoisted into the block scoped so that's called let and const are blocked scope 

/////////////////---  Shadowing--- ///////////////////////////////////

// let b = 100;
// // Shadowing is when we have a variable with same name in different scope and we access that variable it will give us the value of the variable which is in the current scope not the outer scope.

// {
//     var a = 10;
//     let b = 20;
//     const c = 30;

//     console.log(b); // This will give us 20, because we are accessing the b in the current block scope, not the outer scope.
//     console.log(a); // This will give us 10, because a is declared with var and is hoisted to the global scope.
    
// }

// console.log(b); // This will give us 100, because we are accessing the b in the global scope but it also go to Scripted, not the block scope.
// console.log(a); // This will give us 10, because a is declared with var and is hoisted to the global scope.

// const c = 100;

// function x(){
//     var a = 10;
//     let b = 20;
//     const c = 30;
//     console.log(c); // 30
// }
// x();
// console.log(c); // 100, because we are accessing the c in the global scope, not the function scope.

// In the above example, we have a function x() which has a variable c declared with const. When we call the function x(), it will print 30 because it is accessing the c in the function scope. But when we access c outside the function, it will print 100 because it is accessing the c in the global scope.
// This is how shadowing works in JavaScript. The variable in the inner scope will shadow the variable in the outer scope, and we will access the variable in the current scope.

// This is a very important concept in JavaScript, especially when we are working with functions and blocks. It helps us to understand how variable scoping works and how we can access variables in different scopes.
// Remember, var is function scoped, let and const are block scoped. So, if we declare a variable with var inside a block, it will be hoisted to the function scope or global scope, but if we declare a variable with let or const inside a block, it will be hoisted to the block scope.  

// This is why we use let and const to create block scoped variables, so that we can avoid variable shadowing and access the variables in the correct scope.

// In conclusion, block scope and shadowing are important concepts in JavaScript that help us to understand how variable scoping works and how we can access variables in different scopes. It is important to understand these concepts to avoid confusion and bugs in our code.
// Always remember, var is function scoped, let and const are block scoped. So, if we declare a variable with var inside a block, it will be hoisted to the function scope or global scope, but if we declare a variable with let or const inside a block, it will be hoisted to the block scope.
// This is why we use let and const to create block scoped variables, so that we can avoid variable shadowing and access the variables in the correct scope.

// Illegal shadowing is when we try to declare a variable with the same name in the same scope, it will throw a syntax error. For example:
// let a = 10;
// let a = 20; // This will throw a syntax error because we are trying to declare a variable with the same name in the same scope.
// var a = 10;
// var a = 20; // This will not throw an error because var is function scoped and it will just overwrite the value of a.


// let a= 10;
// {
//     // var a = 10; // This is ilegal shadowing, because var is function scoped and it will throw an error.
//     let a = 20; // This is legal shadowing, because we are declaring a variable with the same name in a different scope.
//     console.log(a); // This will print 20, because we are accessing the a in the current block scope.
// }


// var a = 10;
// {
//     let a = 20; // This is legal shadowing, because we are declaring a variable with the same name in a different scope.
//     console.log(a); // This will print 20, because we are accessing the a in the current block scope.
// }


// let a = 10;
// function x() {
//     var a = 20; // This is legal shadowing, because var is function scoped and it will not throw an error.
//     console.log(a); // This will print 20, because we are accessing the a in the function scope.
// }

const a = 20;
{
    const a = 30; // This is legal shadowing, because we are declaring a variable with the same name in a different scope.
    {
        const a = 40; // This is legal shadowing, because we are declaring a variable with the same name in a different scope.
        console.log(a); // This will print 40, because we are accessing the a in the innermost block scope.
    }
}

// In this previous example there also maintain lexical scope, so when we access a in the outer block it will give us 30 and in the global scope it will give us 20.
// console.log(a); // This will print 20, because we are accessing the a in the global scope.


// Now let's talk about arrow function and how it behaves with block scope and shadowing.

// Whether you drclare a function with function keyword or arrow function, we feel hyat those might have differnt scope but they are exactly same thus all these scope rules which work on functions are exactly same on arrow function as well.

