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

function cry(){
    console.log("buhuhuuu");
}

// now with two different arguments

function doNtimes(func, num){
    for(let i = 0; i < num; i++){
        func();
    }
}

// oder random pick one function

function randomF(fu1, fu2){
    let rnd = Math.random();
    console.log(rnd);
    if(rnd <= 0.5){
        fu1();
    } else {
        fu2();
    }
}

randomF(laugh, cry);

// functions as return values:

function multiplyBy(num){   // define function that takes, in this case, num as argument
    return function(x) {    // multiplyBy() will return an new function(x)...
        return x * num;     //...where num = what I put in as argument
    }
}

const double = multiplyBy(2); // now I store this function as a variable with num set to 2

double(4);  // and now I can call my new variable as a function and put in the parameter
            // I want x to be in the new and final function
            // in this case is resolves to 4(x) * 2(num)

// so I can reuse the original function to make a function that takes a number and 
// triples it:

const triple = multiplyBy(3); // set the new function to num === 3

triple(5);  // set the new variable as function with the parameter 5, which will result in 15

const halve = multiplyBy(0.5);

halve(10);

// eine neue function, die checkt, ob jemand ein kind ist (zwischen 0-18)

function isBetweenFunc(x, y){
    return function(z){
        return z < y && z >= x;
        }
}

const isChild = isBetweenFunc(1,18);    // isBetweenFunc() mit den Rahmendaten wann man 
                                        // kind ist (wenn man dazwischen liegt)

isChild(8);         // jetzt ist isChild() eine Funtion, die checkt, ob das Alter
                    // in der Klammer von isChild() ist das zu prüfende Alter

// jetzt lässt sich die function auch für anderes nutzen, z.B. ist das Wetter gut

const isWeatherNice = isBetweenFunc(18, 25);

isWeatherNice(22); //22 liegt zwischen 18 & 25, deshalb true


// Callbacks (im Prinzip functions that use functions?)

function grumpy(){
    alert("mehmehmeh GO AWAY");
}

// setTimeout(grumpy, 5000);    // this build in method needs a function and a number in miliseconds as 
                                // as arguments. It will then call this function after the set delay.

// functioniert auch als anonyme function, also es muss nicht unbedingt
// eine function vorher definiert werden, besonders genomen, wenn man diese fucnktion nur
// einmal benötigt, also kein blueprint braucht:

// setTimeout(function(){
//     alert("anonyme function");
// }, 5000);


// hier eine callback function die mit einem button auf der website reagiert
// syntax ist nicht so wichtg, kommt später im kurs genauer vor

const btn = document.querySelector('button');

btn.addEventListener('click', function(){
    alert("WTF? Why did you click?");
});

























