// in case the user or another function via callback doesn't fill in all needed arguments e.g.
// only one number into this function:

// function multiply(a,b) {
//     return a * b;
// }

// we can force default parameters. In this case we say if b is "undefined, we set b to something

// function multiply(a,b) {
//     if(typeof b === 'undefined'){
//         b = 2;
//     } 
//     return a * b;
// }

// there is a default parameters way of writing this, just declare b in the function:

function multiply(a,b = 2) {
    return a * b;
}

// an example with a name and greeting. If I do not fill in a greeting, it will 
// automatically fill in "fuck you"

function greeting(name = "Person", greeting = "Fuck you!"){
    return 'Hi ${name}, ${greeting}';
} 