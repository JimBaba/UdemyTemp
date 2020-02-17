const firstArr = [1, 3, 5, 333]

function doubleArr(arr) {
    const newArr = []
    for(let num of arr) {
        let double = num * 2;
        newArr.push(double);
    }
    return newArr;
}

doubleArr(firstArr);


// functions in functions have scope (lexical scope)

function outer(){
    let movie = "Alien";

    function inner(){
        console.log(movie.toUpperCase());
        }
    inner();
}


// functions sind objects, können in variablen gespeichert werden

const square = function (num) {
    return num * num;
}

console.log(square(4));

// oder so:

const sum = function addition(x, y) {
    return x + y;
}

console.log(sum(5, 8));

// functions can also be stored in an array 
// (einmal auch als beispiel einer function in einer variablen)

function add(x, y) {
    return x + y;
}

const sub = function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

const operations = [add, sub, multiply, divide];

console.log(operations[2](3, 4));

// beispiel wie man alle functions in einem array auslösen kann:

for(let func of operations) {
    let result = func(4,8);
    console.log(result);
}

// function in einem object speichern:

const thing = {
    doSomething : multiply
}

console.log(thing.doSomething(4, 2));

// eine function einem object zuordnen = method

//__________________________________________________


// functions that accept other functions as arguments:

const sumNew = function add(x, y) {
    return x + y;
}

function subtractNew(x, y) {
    return x - y;
}

function together(func1, func2) {
    return func1 + func2;
}

console.log(together(sumNew(4, 4), subtractNew(8, 6)));

// or easier to understand/Read: FUNZT NOCH NICHT!

function doubleF(func) {
    func();
    func();
}

function laugh() {
    console.log("HAHAHAAHA");
}

