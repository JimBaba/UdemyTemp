// while loop basic

let a = 1;

while(a <= 10) {
        console.log(a);
        a++
}

// sinnvoller while loop, wenn man niht weiß wie lang exakt der
// loop laufen wird (z.B. while(!gameover))
// oder wir raten eine zahl und wollen das target treffen, wie oft wir raten müssen, um 
// dorthin zu kommen ist unklar, deshalb while loop:

const target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);

while(guess !== target) {   //while guess is not equal to target
    console.log(`your guess was ${guess}, but the target was ${target}`);
    guess = Math.floor(Math.random() * 10);
}

console.log(`gz, your guess of ${guess} was the same as the target of ${target}`);

// introducing break;

for(let i = 0; i <= 10; i++){
    console.log(i);
    if(i === 5) {
        console.log("you reached the break mark in the for loop");
        break;
    }
}

// break in a while loop, beispiel guess and target mit break;

while(true){
    console.log(`your guess was ${guess}, but the target was ${target}`);
    guess = Math.floor(Math.random() * 10);
    if(guess === target) {
        console.log("Your guess and target matched")
        break;
    }
}

// besser aber so, weil while(true) ist nicht sehr selbsterklärend

let gameOver = false;

while(!gameOver){
    console.log(`your guess was ${guess}, but the target was ${target}`);
    guess = Math.floor(Math.random() * 10);
    if(guess === target) {
        console.log("Your guess and target matched")
        break;
    }
}