/*  1. What a closure in javascript is? 
    So a function along with a reference to its outer lexical environment is called a closure.
    In other word you can say that closure is a combination of a function and its lexical scope bundle together forms a closure.
    
    So its like each and every function in JavaScript has access to its outer lexical environment. that means like access to the variables abd function which is presebt in the environment of its parents. So it has each and every function has access to them. So even when this function is like executed in some other scope not in its orignal scope, it still remembers its lexical environment. So this is what closure is in JavaScript.

    for example,

    function outer(){
        var a = 10;
        function inner(){
            console.log(a); // This will print 10
        }
        return inner; // Returning the inner function
    }
    
    var close = outer();
    close(); // This will print 10

    outer()(); // This will also print 10 same as above.

    if, we use var a = 10; in line number 14 means before returning is it also clousure?
    Yes, it is still a closure. The inner function `inner` has access to the variable `a` defined in the outer function `outer`, even after `outer` has finished executing. When you call `close()`, it still remembers the value of `a` because of the closure created when `inner` was defined.

    and if we use let a = 10; in line number 14 means before returning is it also clousure?
    Yes, it is still a closure. The inner function `inner` has access to the variable `a` defined in the outer function `outer`, even if `a` is declared with `let`. The closure captures the value of `a` at the time `inner` was defined, allowing it to access that value later when `close()` is called.
    So, in both cases, the inner function retains access to the variable `a` from its outer lexical environment, demonstrating the concept of closures in JavaScript.

    now, if we give a argument to the outer function like this, var close = outer("Hello"); and if we console.log(a, b); is this also closure?
    Yes, it is still a closure. When you pass an argument to the outer function, the inner function can still access that argument as part of its lexical environment. cause that are from global scope and lexical reference to its outer lexical environment.

    now if wrapping the inner function in another function then is it still a closure?
    yes it is still a closure. 

    like 

    function outest(){
        var c = 20;
        function outer(b){
            function inner(){
            console.log(a, b, c); // This will print 10, "Hello", 20
            }

            let a = 10;
            return inner; // Returning the inner function
        }
        retunr outer;
        
    }

    var close = outest()("Hello");
    close(); // This will print 10, "Hello", 20
    or
 
    outest()("Hello")(); // This will also print 10, "Hello", 20.

    could you tell me what is the difference between closure and scope?
    Closure is a function that has access to its own scope, the outer function's scope, and the global scope. It allows the inner function to remember the variables from its outer function even after the outer function has finished executing. Scope, on the other hand, refers to the visibility and accessibility of variables in different parts of your code. In JavaScript, there are different types of scopes: global scope, function scope, and block scope.

    could you explain the difference between closure and scope in simple terms?
    Sure! Think of scope as the area where a variable is accessible. For example, if you declare a variable inside a function, that variable is only accessible within that function (this is called function scope).
    Closure, on the other hand, is like a special power that a function has. It allows the function to remember the variables from its outer function even after that outer function has finished running. So, if you have a function inside another function, the inner function can still access the variables from the outer function, even if the outer function has already completed its execution.
    In simple terms, scope is about where variables can be seen and used, while closure is about a function's ability to remember and access those variables even after the outer function has finished running.

    now could you tell about data hiding and encapsulation in closure?
    Closure can be used for data hiding and encapsulation in JavaScript. By defining variables within an outer function and returning an inner function, you can create a private scope that is not accessible from the outside. This allows you to control access to the variables and methods, effectively hiding them from the global scope.

    give me an example of data hiding and encapsulation in closure?

    function counter(){
        var count = 0; // Private variable

        return function increment(){
            count++; // Accessing the private variable
            console.log(count); // Printing the current count
        }
    }
    var counter1 = counter(); // Creating a new counter instance
    counter1(); // Prints 1
    counter1(); // Prints 2
    counter1(); // Prints 3

    if we create another instance of counter like var counter2 = counter(); and call counter2(); will it print 1?
    Yes, it will print 1. Each time you call the `counter` function, it creates a new instance of the private variable `count`. So, when you create `counter2`, it has its own separate `count` variable that starts at 0. When you call `counter2()`, it increments its own `count` variable and prints 1.

    is this code is scalable?
    The code is not very scalable because it creates a new closure each time you call the `counter` function. If you need to create many counters, each will have its own separate `count` variable, which can lead to memory inefficiency. A more scalable approach would be to use a class or a factory function that can manage multiple instances of counters without creating separate closures for each one.
    here we can use this constructors functions and here the example so we we can manage both increment and decrement of the counter.

    function Counter(){
        var count = 0; // Private variable

        this.increment = function(){
            count++; // Accessing the private variable
            console.log(count); // Printing the current count
        }
        this.decrement = function(){
            count--; // Accessing the private variable
            console.log(count); // Printing the current count
        }
    }
    var counter1 = new Counter(); // Creating a new counter instance for create a constructor function instance use `new` keyword. and good practice is to use capital letter for constructor function.

    counter1.increment(); // Prints 1
    counter1.increment(); // Prints 2
    counter1.decrement(); // Prints 1
    counter1.decrement(); // Prints 0

    what is the disadvantage of using closure?
    One disadvantage of using closures is that they can lead to increased memory usage. Since closures retain references to their outer scope, they can prevent garbage collection of variables that are no longer needed, leading to memory leaks if not managed properly. Additionally, excessive use of closures can make code harder to read and maintain, especially if the closure logic becomes complex or nested deeply.

    Now tell me about garbage collection in closure?

    Garbage collection is the program in the browser or the javascript engine which kind of frees up the unutilized memory. It automatically reclaims memory that is no longer in use, helping to prevent memory leaks and optimize performance.

    what is the relationship between closure and garbage collection?

    Garbage collection in JavaScript is the process of automatically reclaiming memory that is no longer in use. Closures can complicate garbage collection because they maintain references to their outer scope, preventing those variables from being collected even after the outer function has finished executing. If a closure retains a reference to a variable that is no longer needed, it can lead to memory leaks, as the garbage collector cannot free up that memory.
    
    To avoid memory leaks with closures, it's important to ensure that closures do not hold onto references to variables that are no longer needed. This can be done by carefully managing the scope and lifetime of variables within closures.
    

    Extra: In other words, a closure is a function that has access to its own scope, the outer function's scope, and the global scope. This allows the inner function to remember the variables from its outer function even after the outer function has finished executing.

    
*/