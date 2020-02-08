let abk = ["lol", "rofl", "WTF", "DTF", "GTL"];
let answer = "DTF";

console.log(abk, abk.length)

abk.push("BRB");

console.log(abk, abk.length);

abk.push("re", "LFG")

console.log(abk, abk.length);

abk.pop();

console.log(abk, abk.length);

abk.unshift("wb");

console.log(abk, abk.length);

abk.unshift("LFR", "WTS", "WTB")

console.log(abk, abk.length);

abk.shift();

console.log(abk, abk.length);

let curses = ["fuck", "idiot", "shit"];

console.log(curses, curses.length);

let bothArrays = curses.concat(abk);

console.log(bothArrays, bothArrays.length);

let userInput = "np";

if(bothArrays.includes(userInput)) {
    console.log("Already in the array");
} else {
    bothArrays.push(userInput);
    console.log(bothArrays, bothArrays.length);
}

let check = "WTF";

console.log(bothArrays.indexOf(check));

let capitalAbk = abk.slice(0, 4);
let copy = abk.slice();
copy.sort();

console.log(capitalAbk, copy, capitalAbk.length);

