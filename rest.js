// rest is like the opposite of spread. 

// to help make functions that take a variable amount of arguments like 'function sum()' 
// could have 2 or 200 numbers to add together. We can use The arguments object for this (the old way)
// arguments is a JS name used as an array like object. It is not an array, so we need to
// first dpread it into an array, we then can use .reduce to get every element without hardcoding
// the amount of arguments into the function

function sum(){
    const argsArray = [...arguments];
    return argsArray.reduce((total, curVal) => {
    return total + curVal;
    })
}

// better use the new rest function, to add an array as a parameter that catches everything
// that gets entered into the function into an array

function sum2(...nums) {
    return nums.reduce((total, curVal) => {
        // console.log both values to check, not neccessary
        console.log(total, curVal);
        return total + curVal;
    })
}

// rest collects arguments into an array

function fullName(first, last,...titles) {
    console.log("first name is ", first)
    console.log("last name is ", last)
    console.log("entered titles are ", titles)
}

console.log(fullName("Dan", "Payne", "Maker of Death", "The III", "Slayer of Champions"))

// multiply function

function multiply(...nums) {
    return nums.reduce((total, currVal) => {
        return total * currVal;
    })
}

// multiply function, extra short

const multiply2 = (...nums) => (
    nums.reduce((total, currVal) => total * currVal))



