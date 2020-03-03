// the every function is a boolean function and returns true or false
// it only returns true if every element is true

const shorts = ["brb", "lol", "lel", "vwl", "atm"];

const shortCheck = shorts.every(w => {
    return w.length === 3;
})

// or check if the last letter is an l

const lastCheck = shorts.every(l => {
    const last = l.length -1;
    return l[last] === "l";
})

// the some function is also boolean and checks if any element is true
// in this case we check if an element contains the letter v

const vCheck = shorts.some(w => {
    return w.includes("v");
})

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

const query = "Brad Pitt";

const result = movies.filter(a => {
    return a.actors.includes(query);
});

const best = movies.filter(r => {
    return r.rating >= 4;
})

// check if there are movies with a rating higher than 4

const rateSomeCheck = movies.some(r => {
    return r.rating > 4;
});

// check if every movie has a rating higher than 4

const rateEveryCheck = movies.every(r => {
    return r.rating > 4;
});

// check if there are at least 2 movies with the same actor

const moreThanOneActor = movies.some(a => a.actors.length > 1);