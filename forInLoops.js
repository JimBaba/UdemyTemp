// a for...in will loop over properties (keys), not values, besonders für Objects geeignet

const jeopardyWinnings = {
    regularPlay             : 2522700,
    watsonChallenge         : 300000,
    tournamentOfChampions   : 500000,
    battleOfTheDecades      : 100000
};

console.log(jeopardyWinnings);

let allWinnings = 0;

for(let prop in jeopardyWinnings) {
    console.log(prop);
    console.log(jeopardyWinnings[prop]);
    allWinnings += jeopardyWinnings[prop];
}
console.log(`The total of all winnings of this guy is ${allWinnings}`);

// for in mit arrays gibt den Index (Property) wieder:

let num = [8, 5, 4, 22, 15];

for(k in num){
    console.log(k);
}

// generell ist for...in nicht wirklich für arrays geeignet, da man values mit for...of
// auslesen kann