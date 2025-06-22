// Here setTimeout have trust issue we input it will take 5000 mili second but it can take more time why first see the photo setTimeout

// now we learn how to stop the main thread let's learn

console.log("Start");

setTimeout(function cb(){
    console.log("Callback");
}, 5000);

// cb is register web api environment and wait in callback Q and event loop just check when GEC is pop out then it will go to the call stack and execute untill it will wait in callback Q. doesn't matter how much time call stack take time for empty.
console.log("End");

// million of code

let startDate = new Date().getTime(); // here new Date() is give you current date and .getTime is give the current time in milisecond
let endDate = startDate;
// this while loop will run 10 second how by this logic. 
while(endDate < startDate + 10000){
    endDate = new Date().getTime();
}

console.log("While loop ends");


// Here we learn why we don't stop our main thered cause our callback function will be stuck in callback Q.

