const prices = [49.99, 1500, 19.49, 350, 25.64];

// normally the sort() functions takes array values as strings,
// we can sort number low to high like this, because negative numbers a goes before b

// const sort1 = prices.sort((a,b) => a - b);

// an high to low like this   

// const sort2 = prices.sort((a,b) => b - a);

// this way the original prices array will get updated, sort1 and sort2 are refering the same array "adress"
// to sort into a new array you have to use a function that creates a new array without 
// changing the original array

const sort3 = prices.slice().sort((a, b) => a - b);

const sort4 = prices.slice().sort((a, b) => b - a);

// sort movie object by rating in place 
const movies = [
    {
        title: "Batman Returns",
        actors: ["Michael Cain", "Morgan Freeman", "Christian Bale"],
        genres: ["action", "comic"],
        rating: 4.8
    },
    {   
        title: "Mad Max",
        actors: ["Mel Gibson"],
        genres: ["action"],
        rating: 4.9
    },
    {
        title: "Ocean's Eleven",
        actors: ["Brad Pitt", "George Clooney"],
        genres: ["action", "comedy"],
        rating: 3.6
    },
    {
        title: "Mr and Mrs Smith",
        actors: ["Angelina Jolie", "Brad Pitt"],
        genres: ["comedy"],
        rating: 2.8
    }
];

// ascending: (decending would be b.rating - a.rating)

const sortedMovies = movies.sort((a,b) => {
    return a.rating - b.rating;
})


