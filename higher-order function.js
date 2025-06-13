// Here we will learn Higher order function

// IN previous we study first class function. higer order function needs that so both are same.

const radius = [3, 1, 2, 4];

function calculateArea(radius){
    const output = [];
    for(let i = 0; i < radius.length; i++){
        output.push(Math.PI * radius[i] * radius[i])
    }
    return output;
}

// const area = calculateArea(radius);

function calculateCircumference(radius){
    const output = [];
    for(let i = 0; i < radius.length; i++){
        output.push(Math.PI * radius[i] * 2);
    }
    return output;
}

const cirCumference = calculateCircumference(radius);

// console.log(cirCumference);

// we use this to reuse function without copy paste same thing, and it's our self made map we can call it map also.
function calculate(radius, logic){
    const output = [];
    for(let i = 0; i < radius.length; i++){
        output.push(logic(radius[i]));
    }
    return output;
}

const area = function(radius){
    return Math.PI * radius * radius;
}

const result = calculate(radius, area);

console.log(result);

const resutl1 = radius.map(area);

console.log(resutl1);


// Now as we understand map let's make our function excectly map for that we use Array.prototype it's work is available all array can access our function useing arr.calculate like this. and there how we send our array value using this casue there this is mention our array.


Array.prototype.calculate = function(logic){
    const output = [];
    for(let i = 0; i < this.length; i++){
        output.push(logic(this[i]));
    }
    return output;
}

console.log(radius.calculate(area));

// here it is our own map we built. 

// Here we move to prototype and prototypal inheritance in javascript