
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

// let scoreSchnitt = 0;

// for(i = 0; i <= myStudents.length; i++) {
//     scoreSchnitt += myStudents.score;
//     console.log(scoreSchnitt);
// }
// console.log(`Der Schnitt ist ${scoreSchnitt / myStudents.length}`);

// and with strings, rückwärts jeder buchstabe einzeln

const word = "stressed";
let reversedWord = "";

for(i = word.length - 1; i >= 0; i--) {
    reversedWord += word[i];
    console.log(reversedWord);
}


