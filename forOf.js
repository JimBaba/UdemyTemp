// standard use in an array:

let subs = ["hotas", "games", "soccer", "factorio"];

for(let i = 0; i < subs.length; i++) {
    console.log(subs[i]);
}

// als for...of, wenn einfach alle Elemente ausgespuckt werden sollen und die indexe dabei egal
// sind, for...of gibt als Werte, statt indexe wieder

for(let subReddit of subs) {
    console.log(subReddit);
}

// oder auch mit strings

let word = "Something";

for(chars of word) {
    console.log(chars.toUpperCase());
}

// for and for of combined, first traditional for loop:

const magicSquare = [
    [2, 7, 6],
    [9, 5, 1],
    [4, 3, 8]
]

for(let i = 0; i < magicSquare.length; i++) {
    let row = magicSquare[i];
    console.log(row);
    let count = 0;
    for(let j = 0; j < row.length; j++) {
        console.log(row[j]);
        count += row[j];
    }
    console.log(`The row ${row} sums up to ${count}`);
}

// now as a nested for...of

for(let row of magicSquare) {
    let count = 0;
    for(num of row) {
        count += num;
    }
    console.log(`The row ${row} sums up to ${count}`);
}

// for...of mit objects: (fun fact: every key will be made into a string, so we can use string 
// literals as keys to have spacing in between words)
// objects sind nicht iterable, weil keys=strings und values, in diesem Beispiel, sind ints


const movieScores = {
    Arrival             : 9.5,
    Alien               : 10,
    Amelie              : 7.5,
    "In Bruges"         : 9,
    Amadeus             : 6,
    "Kill Bill"         : 8.5,
    "Batman Forever"    : 4,
    "Mad Max"           : 10
};

// über die JS function Object.keys/Object.values kann man die Inhalte direkt einsehen:

console.log(Object.keys(movieScores), Object.values(movieScores));

// dies kann man für for...of nutzen:

for(movie of Object.keys(movieScores)) {
    console.log(movie, movieScores[movie]);
}

// Durchschnitts Score errechnen:

const count = Object.values(movieScores);
let sum = 0;

for(let rating of count) {
    console.log(rating);
    sum += rating;
}

console.log("Die durchschnittliche Wertung ist: " + sum / count.length);
