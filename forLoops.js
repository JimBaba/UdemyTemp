
// for loop = 3 Werte: [initialExpression];[condition];[incrementExpression]

for(let i = 1; i <= 10; i++) {
    console.log(i);
}

// loop 1-20 squared

for(let i = 1; i <= 20; i++) {
    console.log(`The result of ${i} x ${i} = ${i * i}`);
}

// loop mit größeren increments

for(let i = 100; i >= 0; i -= 25) {
    console.log(i);
}

// ----------------------------------
// vorsicht for infinite loops wie:

// for(let i = 10; i >= 0; i++) {
//     console.log(i);
// }
// -----------------------------------

// fill array with for loop 1-10

let count = [];

for(i = 1; i <= 10; i++) {
    count.push(10 + i);
    console.log(count);
}

// and then print out contents of array

for(let i = 0; i < count.length; i++) {
    console.log(i, count[i]);
}

// and now with an array incl. objects, wie man an die einzelnen keys der objekte kommt:

const myStudents = [
    {
        name    : "Zeus",
        score   : 76
    },
    {
        name    : "Hera",
        score   : 88
    },
    {
        name    : "Artemis",
        score   : 100
    },
    {
        name    : "Hades",
        score   : 96
    }
]

for(let i = 0; i < myStudents.length; i++) {

    let studentName = myStudents[i].name;
    let studentScore = myStudents[i].score;

    console.log(`${studentName} got a score of ${studentScore}`);

}

// scores zusammenrechnen und durch anzahl studenten teilen (funzt noch nicht)

let scoreAll = 0;
let studentCount = myStudents.length;

console.log(studentCount);

for(let i = 0; i < studentCount; i++) {
    let indiScore = myStudents[i]; 
    scoreAll += indiScore.score;
 }
 console.log(`Die Gesamtsumme aller Scores is ${scoreAll}`);
 console.log(`Der Schnitt ist ${scoreAll / studentCount}`);

// and with strings, rückwärts jeder buchstabe einzeln

const word = "stressed";
let reversedWord = "";

for(i = word.length - 1; i >= 0; i--) {
    reversedWord += word[i];
    console.log(reversedWord);
}

// nested for-loops basics

for(let i = 1; i <= 10; i++) {
    console.log("Outer Loop:", i);
    for(let j = 10; j >= 0; j -= 2) {
        console.log("   Inner Loop", j);
    }
}

// konkretes Beispiel anhand einer Zusammenrechnung eines Gameboards mit verschiedenen Zahlen

const gameBoard = [
    [4, 32, 8, 4],
    [64, 8, 32, 2],
    [8, 32, 16, 4],
    [2, 8, 4, 2]
];

let rowCount = 0;

for(i = 0; i < gameBoard.length; i++){
    let row = gameBoard[i];
    console.log(row);
    for(j = 0; j < row.length; j++){
        rowCount += row[j];
    }
}
console.log(rowCount);
