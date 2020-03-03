// the keyword find expects a function and then finds what we are looking for in an array.
// IT STOPS AFTER FINDING THE FIRST RESULT!

let movies = [
    "The fantastic Mr. Fox",
    "Mr. and Mrs. Smith",
    "Mrs. Doubtfire",
    "Mr. Deeds"
];

// if I check with .find has to return true or false and as soon as it returns true (found it)
// it stops and spits out the first element with the search phrase

const checkMrs = movies.find(m => {
   return m.includes("Mrs.");
})

// in contrast a search for "Mrs" at an index of an element (0 = [M]rs. Doubtfire
// 8 = Mr. and [M]rs. Smith):

const checkMrs2 = movies.find(m => (
    m.indexOf("Mrs") === 0
))



const books = [
    {
        title: 'Good Omens',
        authors: ['Terry Pratchett', 'Neil Gaiman'],
        rating: 4.25,
        genre: ["fantasy"]
    },
    {
        title: 'Bone: The Complete Edition',
        authors: ['Jeff Smith'],
        rating: 4.42,
        genre: ["essay", "short stories"]
    },
    {
        title: 'American Gods',
        authors: ['Neil Gaiman'],
        rating: 4.11,
        genre: ["short stories"]
    },
    {
        title: 'A Gentleman in Moscow',
        authors: ['Amor Towles'],
        rating: 4.36,
        genre: ["fantasy", "essay"]
    } 
]

// find the first book in that array with a higher or equal rating of 4.3 (the first, not all)

const goodBook = books.find(b => b.rating >= 4.3);

// find the first book with neil gaiman as author

const neilBook = books.find(b => b.authors.includes("Neil Gaiman"));

// .filter so find all elements with "Neil Gaiman" and put every object element with it
// in a new array

const gaiman = books.filter(a => a.authors.includes("Neil Gaiman"));

// another example: take an array of numbers and put all odd numbers in a new array

numbers = [1,2,3,4,5,6,7,8,9];

const odds = numbers.filter(n => {
    return n % 2 === 1;
})

// or smaller numbers than 5

const smallNum = numbers.filter(n => {
    return n < 5;
})

// filter for essay or fantasy

const genreSelect = books.filter(g => {
    return g.genre.includes("fantasy") || g.genre.includes("essay");
})

// user input search for title

const query = "GOD";
const result = books.filter(r => {
    const title = r.title.toLowerCase();
    return title.includes(query.toLowerCase())
})