console.log("Solving with Promises...");

// Today we will learn how to create promise and work with them
//

const cart = ["shoes", "pants", "kurta"];

const promise = createOrder(cart); // This returns a promise with orderId
console.log(promise);

promise
  .then(function (orderId) {
    console.log("Order created successfully with ID:", orderId);
    return orderId; // Return the orderId to the next then. must this need when we want to chain promises.
    // Proceed to payment
  })
  .then(function (orderId) {
    return proceedToPayment(orderId); // now let's write this function and it's also a promise and it must be returned. or if we handle there in then it will be fine but it's also a promise hell like callback hell. so we return it and no issue we return a promise next .then will wait for it to resolve.
  })
  .then(function (paymentInfo) {
    console.log("Payment Info:", paymentInfo);
    // Show invoice
    // return showInvoice(paymentInfo); // If we have another function to show invoice we can return it here.
  })
  .catch(function (error) {
    console.log("Error creating order:", error.message);
    // Handle error, maybe show a message to user. and now we don't show in red color.
  });

/// Producer

function createOrder(cart) {
  const pr = new Promise((resolve, reject) => {
    // create order
    // validate cart
    // orderId

    if (!validateCart(cart)) {
      const err = new Error("Invalid cart"); // this ways we create error object it's shown in the red color in console
      reject(err);
    }
    // logic for creating order
    const orderId = "12345";
    if (orderId) {
      setTimeout(() => {
        resolve(orderId);
      }, 5000);
    }
  });

  return pr; // Return the promise
}

function proceedToPayment(orderId) {
  ///
  return new Promise((resolve, reject) => {
    resolve("Payment successful for order ID: " + orderId);
  });
}

function validateCart(cart) {
  return true; // Assume cart is invalid for this example
}

// if we get error in this code but could not handle it . it's not a good practice. WE Must handle it using catch


// Fun thing is there must be multiple error so for each error we handle using catch after each then. but there is a single catch at the end of the chain. so if any error occurs in any of the then it will be caught by this catch. and we can handle it in a single place. so we don't need to write catch after each then. but it's good practice to write catch after each then to handle specific errors.
// but thing is after catch there is then, it will be must be executed.

// HW write a e-commerce app using promises. what to do createOder, proccedTopayment, showOrderSummary, updateWallet 

