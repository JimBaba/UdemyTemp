const btn = document.querySelector('button');
btn.addEventListener('click', function(){
    alert("I said DON'T!");
})

// Array callback methods, we are trying to run a function once per element od an array

let test = [1,2,3,4,5,6,7];

test.forEach(function(n){
    console.log(n/2);
})

// or declare the function first

function tripletIt(n){
    console.log(n * 3);
}

test.forEach(tripletIt);

// an array of objects, where we want to promt out the titles in all uppercase:

const books = [{
    title: 'Good Omens',
    authors: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 4.25
  },
  {
    title: 'Bone: The Complete Edition',
    authors: ['Jeff Smith'],
    rating: 4.42
  },
  {
    title: 'American Gods',
    authors: ['Neil Gaiman'],
    rating: 4.11
  },
  {
    title: 'A Gentleman in Moscow',
    authors: ['Amor Towles'],
    rating: 4.36
  }
]

books.forEach(function(obj){
    console.log(obj.title.toUpperCase());
});

// other versions to do this we already learned:

// forOf, is the newest, but no IE support (who cares?)

for(let num of books){
    console.log(num.title.toUpperCase());
}

// or based on the index, which we don't really need, so it is just longer

for (let i = 0; i < books.length; i++){
    console.log(books[i].title.toUpperCase());
}

// we can also add another argument to our forEach()to get the index

test.forEach(function(num, idx){
    console.log(idx, num);
});

// map() function creates a new array based on what callback function we add:

const numbers = [20,21,22,23,24,25,26,27]
const words = ["asap", "brb", "lol", "afk", "omg"]

const numbersDoubled = numbers.map(function(num){
    return num * 2;
});

console.log(numbersDoubled);

// now lets check if numbers are even and put them in an object which has a boolean true/false

const numbersCheck = numbers.map(function(num){
    return {
        value   : num,
        isEven  : num % 2 === 0 // this is a boolean statement, it will resolve to true or false
    }
});

console.log(numbersCheck);

// the words array in a new array in all caps and each char separated with a .:

const bigWords = words.map(function(n){
    return n.toUpperCase().split("").join(".");
});

console.log(bigWords);
console.log(words);

const titles = books.map(function(bt){
    return bt.title;
})

console.log(titles);