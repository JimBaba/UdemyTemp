// arrow functions are a way to write shorter code for 
// functions, so this:

    // const square = function(num){
    //     return num * num
    // }

// becomes this:

const square = (num) => {
    return num * num;
}

console.log(square(5));

// another example and important: if only one parameter gets put in, you do not need 
// the ():

const isEven = num => {
    return num % 2 === 0;
}

console.log(isEven(8));

// one with multiple parameters (so we need the () around the parameters)

const multiply = (x, y) => {
    return x * y;
}

console.log(multiply(8,3));

// an arrow function that doesn't need parameters needs the ():

const greet = () => {
    console.log("Hey, fam!");
}

greet();

// if you have only one return impression and no other logic within the function 
// it is called implicit Return, implicit returns allow an even shorter way to write functions:
// instead of:

    // const squared = (num) => {
    //     return num * num;
    // }

// we can write is like this:

const squared = num => num * num;

console.log(squared(6));

// another example how we can achieve the same thing with arrays, just with shorter versions:

const nums = [1,2,3,4,5,6,7,8,9];

const doubles1 = nums.map(function(n){
    return n * 2;
})

const doubles2 = nums.map(n => {
    return n * 2;
})

const doubles3 = nums.map(n => n * 2);

// another example on shortiening functions, note that the shortest version won't work
// because this function has multiple expressions (2 return values)

const parityList = nums.map(function(n) {
    if(n % 2 === 0) return "even";
    return "odd";
})

const parityList2 = nums.map(n => {
    if(n % 2 === 0) return "even";
    return "odd";
})

// to be able to make this into a one liner we need to reduce the return values to one, by 
// using a new way to write an if statement (? and :):

const parityList3 = nums.map(n => n % 2 === 0 ? "even" : "odd");