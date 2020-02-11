// like arrays you can also nest objects

const student = {
    firstName       : "John",
    lastName        : "Smith",
    strengths       : ["Music", "Art"],
    exams           : {
        midterm     : 92,
        finals      : 88
    }
};

console.log(student);
console.log(student["exams"]);
console.log(student["strengths"]);

// damit kann man auch rechnen:

const avg = (student.exams.midterm + student.exams.finals) / 2;

console.log(avg);

// beliebter use case für narrays mit objects sind shopping carts:

const shoppingCart = [
    {
        product     : "Batteries",
        price       : 39.99 + "€",
        quantity    : 2
    },
    {
        product     : "Jeans",
        price       : 99 + "€",
        quantity    : 1
    },
    {
        product     : "Buttons",
        price       : 16.50 + "€",
        quantity    : 20
    }
]

console.log(shoppingCart[1]);

//object nesting anhand tic tac toe

const game = {
    player1     : 
    {
        userName    : "Jim",
        side        : "x",
    },
    player2     : 
    {
        userName    : "Dan",
        side        : "o"
    },
    board       : [ ["x",null,"o"], [null, "x",null], [null, null, "o"] ]  
};

console.log(game);

// auch objects speichern nur referenzen zm ort im speicher, nicht die inhalte
// heisst

const game2 = game;

// game2 greift nun auf die gleiche referenz im speicher zu. Das heisst, wenn eins der
// Objekte geändert wird, werden beide objekte geändert,w eil die gleiche referenz:

game["score"] = 5;

console.log(game, game2);


