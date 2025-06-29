// Today we will learn about callback hell in JavaScript.
// You order food.

// The waiter says, "When the chef finishes cooking, I'll bring it to you" → this is a callback.

// Now, imagine you say:
// "When food comes, remind me to call my friend, and after I talk to them, remind me to pay my bill, and when that’s done, remind me to write a restaurant review…"
// Here discuss about 1. callback hell and 2. inversion of control.

// Callback hell is a situation where we have multiple nested callbacks, making the code hard to read and maintain.
// Inversion of control is a design principle where the control flow of a program is inverted, meaning that the program's flow is controlled by external factors, such as callbacks or events.

// to understand callback hell, we will create a simple example where we have multiple nested callbacks.

// create e commerce website cart system

// cart of items
const cart = ['shoes', 'shirt', 'pants'];

// how cart work. 0. create a order  1. payment

// let's assume we have two api endpoint one is createOrder and another is proceedToPayment. first we have to create our order then payment hand there must be dependencies between them. and how we can handle this ?

// for this we have to do async operation and here comes callback who help us to handle this async operation. 
// here we will create a callback function and pass it to createOrder api with cart items and then we will call proceedToPayment api with order id.


api.createOrder(cart, function(){

    api.proceedToPayment(function(){

        api.showOrderSummary(function(){
            api.updateWallet();
        });
    });
})
// here we have to pass the callback function to createOrder api and there is the reponsibility of createoder api to call the proceedToPayment api after the order is created. now we have to show the sumary of the order and proceed to payment.
// and we can do this by passing the callback function to proceedToPayment api. 

// but there is a problem with this approach. and it is called callback hell. because we have to pass the callback function to each api and it will create a nested structure of code which is hard to read and maintain.

// another name is pyramid of doom. because the code will look like a pyramid and it is hard to read and maintain.

// Now we learn inversion of control.

// inversion of control is another problem we see while using callback. what is it it is you loss the control of the your code when we are using callback. because the control is in the hands of the api. and we have to wait for the api to call the callback function. and we can't do anything until the api call the callback function.

// how we loss our coontrol . like we put our callback to the api and we wait this will complete our callback but we don't know when it will complete. even we don't know actually that api is written or not. 