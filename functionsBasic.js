// function basic without arguments

// function helloworld(){
//     console.log("Hello World");
// }

// helloworld();

// console.log("End of base function");

// functions können dann immer wieder benutzt werden in anderen bereichen 

// for(let i = 0; i < 10; i++){
//     helloworld();
// }

// Dice Roll Function: (+1, weil sonst 0.1 - 0.9 * 6 = max. 5.4)

// function dieRoll(){
//     let roll = Math.floor(Math.random() * 6) + 1;
//     console.log(roll);
// }

// dieRoll();

// functions with parameters (when defined) bzw. arguments (when called)

// function throwDice(numOfRolls) {
//     for(let i = 0; i < numOfRolls; i++){
//         dieRoll();
//     }
// }

// throwDice(6);


// function getInsulted(insult1, insult2){
//     console.log(`Na, du ${insult1}...`);
//     console.log(`...ja du! ${insult2}`);
// }

// getInsulted("Arschloch", "Ficker");


// function getSquared(num1, num2){
//     let result = num1 ** num2;
//     console.log(`${num1} to the power of ${num2} equals ${result}`);
// }

// getSquared(5, 2);

// return console.log() vs return

// function add(a, b) {
//     console.log(a+b);
// }

// add(5, 4);

// return kann nur einen wert returnen, wenn mehrere Werte gebrauchtw erden muss man sie z.B. in ein
// array packen 

// function addReturn(a, b) {
//     return a + b;
// }

// const sum = addReturn(2, 4);

// wenn return executed wird, hört der Code danach auf

// function isPurple(color) {

//     if(color === "purple") {
//         return true;
//     } 
//     else {
//         return false;
//     }
// }

// refactoring in a better way:

// function isPurple(color) {

//     if(color === "purple") {
//         return true;
//     } 
//         return false;
// }


// even shorter, weil entweder true oder false und das wir returned, also return mit 
// operator 

// function isPurple(color) {

// return color === "purple";
// }

// for any element of array 

// function containsPurple(arr) {
//     for(let color of arr) {
//         if(color === "purple" || color === "lilac" || color === "magenta") {
//             return true;
//         }
//     }
//     return false;
// }

// containsPurple(['blue', 'magenta', '344', 'red']);

// function square(x) {
// 	return x * x;
// 	console.log('ALL DONE!'); //this NEVER runs;
// }

// One way of writing this function
// function isPurple(color) {
// 	if (color.toLowerCase() === 'purple') {
// 		return true;
// 	}
// 	else {
// 		return false;
// 	}
// }

// We don't need the else!
// function isPurple(color) {
// 	if (color.toLowerCase() === 'purple') {
// 		return true;
// 	}
// 	return false;
// }

// An even shorter way!
// function isPurple(color) {
// 	return color.toLowerCase() === 'purple';
// }

// function containsPurple(arr) {
// 	for (let color of arr) {
// 		if (color === 'purple' || color === 'magenta') {
// 			return true;
// 		}
// 	}
// 	return false;
// }

function containsPurple(arr) {
     for(let color of arr) {
         if(color === "purple" || color === "lilac") {
            return true;
         }
    }
     return false;
}