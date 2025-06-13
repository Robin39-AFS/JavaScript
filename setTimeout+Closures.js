// Interview Question: about Closures 

// function x(){
//     var i = 1;
    
//     setTimeout(function(){
//         console.log(i); // 1, because the closure captures the value of i at the time the setTimeout was created.
//     }, 3000);
//     console.log("Hello, World!"); // This will print immediately.    
// }

// x();

// Here what setTimeout do is, it takes this callback function and store it into some place and attaches a timer to it. and javascript not wait for this callback function to execute, it will continue to execute the next line of code. So, it will print "Hello, World!" immediately and then after 3 seconds, it will print 1.
// This is how closures work in JavaScript. The inner function (the callback function in setTimeout) has access to the outer function's variables (in this case, the variable i), even after the outer function has finished executing. The closure captures the value of i at the time the setTimeout was created, which is 1 in this case.

// When the timer expires after 3 seconds, it takes that callback function puts into the call stack and executes it. So, it will print 1 after 3 seconds.
// This is a very important concept in JavaScript, especially when we are working with asynchronous code. It helps us to understand how closures work and how we can access variables in different scopes.


// We give a problem to print in the console 1, 2, 3 after 1 second, 2 seconds, and 3 seconds respectively.

// So there is the solution

// function x(){
//     for(var i = 1; i <= 5; i++){
//         setTimeout(function(){
//             console.log(i);
//         }, i*1000);
//     }

//     console.log("Hello, World!"); // This will print immediately.
// }

// x();

// Sorry to say upper code doesn't work js doesn't work like this. why this is print like this it's also because of closures. closure is like a function along with it's lexical environment. so even when function is taken out from it's orginal scope and if it is executed in some other scope , still it remembers it's lexical environment.
// In the above code, the variable i is declared with var, which is function-scoped. By the time the setTimeout callbacks execute, the loop has already completed, and i will be 6 cause it's remember to the reference not value for all of them. So it will print 6 five times after 1 second, 2 seconds, 3 seconds, etc.

// to fix this code use let instead of var, because let is block-scoped and will create a new binding for each iteration of the loop. cause every time this loop run the i is new variable and it will remember the value of i at that time. each time the setTimeout is run this callback function has a new copy of i with it. it's own identity of i with it. 

// in simple words that each and evry time this function is called it is referring to differnet memory location which is their individual i, separate copy of i which were in the scope of that function.
// function x(){
//     for(let i = 1; i <= 5; i++){
//         setTimeout(function(){
//             console.log(i);
//         }, i*1000);
//     }

//     console.log("Hello, World!"); // This will print immediately.
// }

// x();

// Now we will solve this using var and closure.

function x(){
    for(var i = 1; i<=5; i++){
        function close(i){
            setTimeout(function(){
                console.log(i);
            }, i*1000);
        }
        close(i);
    }
    console.log("Hello, World!"); // This will print immediately.
}

x();

// How this code works every time you call this close function it will create a new copy of i and it will remember that value of i at that time. So, when the setTimeout is executed after 1 second, 2 seconds, 3 seconds, etc., it will print the value of i at that time. So it will print 1, 2, 3, 4, 5 after 1 second, 2 seconds, 3 seconds, etc.