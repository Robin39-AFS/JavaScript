// Here learn about map

const arr = [5, 1, 3, 2, 6]

// When we need to transform a array there we use map. tranform means if we want to transform each and evry value of this array and which we get a new array out of it.

// Double the value of that array

function double(x){
    return x * 2;
}

const output = arr.map(double);

console.log(output);

// Convert to the binary rules is to convert binary is var.toString(2)

const binary = arr.map((x) => x.toString(2));

console.log(binary);

// here we use anonymous function called arrow function. if it is one line then no need to return.

// Here let's go about filter function

const odd = arr.filter((x) => x % 2 != 0); // we can use just x % 2 why this work cause it return 1 is odd and return 0 is even so 1 is true that's why it ok. 

console.log(odd);


// Now learn about reduce



