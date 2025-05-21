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

// There also print b even we b declare b inside the function a but for this we can't access b in global scope but invoked a we can access b's value

// But if we declare b in a function and try to print then it will tell it's not defined in and it's actually scope
