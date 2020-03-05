// spread in a function call takes an literal and breaks it down into arguments:

const nums = [12,54,148,56,32,1];

// if I try to pass in my array nums into this function, I get NaN, as it cannot use an array

console.log(Math.max(nums));

// but if I use spread, it takes every value in the array and passes it into my function

console.log(Math.max(...nums))

// it adds every value into that funtion and gives me the highest number of the array in this case

// if I would pass in nums by itself it would throw an error, because an array (even an array
// of numbers) is not a number. That is why ...'spread' has to be used, that way it uses the 
// values of said array, in this case numbers

function sortedNumbers(a,b,c,d,e,f) {
    console.log("a", a)
    console.log("b", b)
    console.log("c", c)
    console.log("d", d)
    console.log("e", e)
    console.log("f", f)
}

console.log(sortedNumbers(...nums))

// strings are also iterable (via each char)

const str = "Hunger";

console.log(sortedNumbers(...str));

// spread in array literals
// to combine arrays:

const coolAnimals = ["Bear","Tiger","Gorilla",];
const shittyAnimals = ["Cat","Skunk","Spider","Blowfish"];
const pets = ["Dog","Bird","Hamster"];

const coolAndPet = [...coolAnimals,...pets];
const allAnimals =[...coolAnimals,...shittyAnimals,...pets];

// geht aber natürlich auch einfacher:

console.log(shittyAnimals.concat(pets, coolAnimals)); // not in a new array and doesn't change the arrays

const concatAnimals = shittyAnimals.concat(pets, coolAnimals); // in a new array

// a very common use is to copy an array:

const copyOfCool = [...coolAnimals];

// we can also spread a string into an array

const hunger = [...str];

// or :

const hallo = [..."Hallo zusammen"]

// spreading into an object literal

// object 1:

const feline = {
    legs: 4,
    family: "Felidae"
};

// Object 2:

const canine = {
    family: "Caninae",
    furry: true,
    legs: 4
};

// new object that includes new values and should have values of one of the first objects:

const dog = {
    ...canine,
    isPet: true,
    adorable: true
}

const cat = {
    ...feline,
    personality: "shitty",
    isGrumpy: true
}

// if I spread two of the same properties, but with different values (family in this case)
// it will take the last one, so order matters

const catDog = {
    ...feline,
    ...canine
}

// also works nested:

const copyCatDog = {
    ...catDog
}

