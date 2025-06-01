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

{
    var a = 10;
    let b = 20;
    const c = 30;
}