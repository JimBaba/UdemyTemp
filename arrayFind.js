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