// Here learn about map

const arr = [5, 1, 3, 2, 6];

// When we need to transform a array there we use map. tranform means if we want to transform each and evry value of this array and which we get a new array out of it.

// Map is return a new array of the same length as the original array.

// Double the value of that array

function double(x) {
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
// Filter is for true and false. It return a new array of the same length as the original array but only with the values that are true.

console.log(odd);

// Now learn about reduce

// Reduce is used to reduce the array to a single value. It takes all the elements of an array and come up with a single value out of them.

// Find the sum and maximum value of the array

function sum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

const result = sum(arr);
console.log(result);

// Now let's use reduce to find the sum of the array

const sumReduce = arr.reduce(function (acc, curr) {
  acc = acc + curr;
  return acc;
}, 0); // Here accumulator value is 0, if we didn't provide it then it will take the first value of the array as the accumulator value and start from the second value of the array.

// Here we use anonymous function called callback function. It takes two arguments, first is the accumulator and second is the current value of the array.

// for the accumulator value it's not mandatory to use of it must be 0, we can use any value like we can use empty object or empty array or any other value.

console.log(sumReduce);

// Now for the maximum value of the array

function max(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(max(arr));
// Now let's use reduce to find the maximum value of the array

const maxReduce = arr.reduce((acc, curr) => {
  if (curr > acc) {
    acc = curr;
  }
  return acc;
});
console.log(maxReduce);
// Here we didn't provide the initial value for the accumulator, so it will take the first value of the array as the accumulator value and start from the second value of the array.
// If we want to find the minimum value of the array then we can use Math.min() function.

// Here we paractice some complicated example of map, filter and reduce

const users = [
  { firstName: "Akshay", lastName: "Saini", age: 26 },
  { firstName: "Donald", lastName: "Trump", age: 75 },
  { firstName: "Elon", lastName: "Musk", age: 50 },
  { firstName: "Depika", lastName: "Padukone", age: 26 },
];

// Guess this array of objects is come from the the database after fetching the data from the server.

// List of full names of the users
// [ "Akshay Saini", "Donald Trump", "Elon Musk", "Depika Padukone"]

const fullName = users.reduce((acc, curr) => {
  acc.push(curr.firstName + " " + curr.lastName);
  return acc;
}, []);
console.log(fullName);

// Using map . map is return and mapFullname is a array also.
const mapFullname = users.map((x) => {
  return x.firstName + " " + x.lastName;
});

console.log(mapFullname);


const filterFullname = users.filter((x) => x.age > 26).map((x) => x.firstName + " " + x.lastName);

console.log(filterFullname);

const task = users.reduce((acc, curr) =>{
    if(curr.age > 26){
        acc.push(curr.firstName + " " + curr.lastName)
    }
    return acc;
}, []);

console.log(task);

// Now solve this how much age is repeted

const age = users.reduce((acc, curr) => {
    if(acc[curr.age]){
      acc[curr.age] += 1;
    }
    else{
      acc[curr.age] = 1;
    }

    return acc;
}, {});

console.log(age);

// Now solve fizz buzz if it's divisible by 3 then fizz and 5 then buzz and both it will be fizzbuzz

// for(let i = 1)