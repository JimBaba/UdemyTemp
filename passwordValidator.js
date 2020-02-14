// Write a isValidPassword function
// It accepts 2 arguments: password and username
// Password must:
//	- be at least 8 characters
//  - cannot contain spaces
//  - cannot contain the username
// If all requirements are met, return true.
//Otherwise: false

// isValidPassword('89Fjj1nms', 'dogLuvr');  //true
// isValidPassword('dogLuvr123!', 'dogLuvr') //false
// isValidPassword('hello1', 'dogLuvr') //false


// function isValidPassword(password, username) {
//     if (password.length < 8 || 
//         password.indexOf(" ") !== -1 || 
//         password.indexOf(username) !== -1) {
//         return false;
//     } 
//     return true;
// }

// oder mir variablen übersichtlicher:

function isValidPassword(password, username) {
    const tooShort = password.length < 8;
    const hasSpace = password.indexOf(" ") !== -1;
    const tooSimilar = password.indexOf(username) !== -1;

    if(tooShort || hasSpace || tooSimilar) {
        return false;
    }
    return true;
}

// another function example

// function avarager(arr) {
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++){
//         sum += arr[i];
//     }
//     return sum / arr.length;
// }

// same function , but itn an for of loop

function avarager(arr) {
    let sum = 0;
    for(let num of arr){
        sum += num;
    }
    return sum / arr.length;
}