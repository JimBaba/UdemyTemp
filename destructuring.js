// destructuring unpacks values from arrays and properties from objects into distinct variables

// destructuring arrays

const raceResults = [
    "Eliud Kipchoge", 
    "Feyisa Lelisa", 
    "Galen Rupp",
    "Superman",
    "The Thing",
    "James Dean"
];

    // const [gold, silver, bronze] = raceResults;

// this way we define the variable names in an array and = it to our array. It then takes the values
// in order they are (index 0-5) and puts them into the variables left to right

// what if we do not go each index? Use a , between them

    // const [first, , , fourth] = raceResults;

// or just destructure parts and put the rest into anotehr array:

    // const [winner, ...rest] = raceResults;
    // const [goldenboy, , ,...lastThree] = raceResults;

// unpacking objects based on the name of the property name (you have to use)
// the property name

    // const runner = {
    //     first: "Digga",
    //     last: "Denz",
    //     country: "Jamaica",
    //     motto: "Winner, winner, chicken dinner!"
    // }

    // const {first, last} = runner;

// normally you have to use the same name for the variables as the properties, but you can also:

    // const {country: nation, motto: favoriteSaying} = runner;

// we can also use e.g. 2 variables to store the names and put the rest into a rest array

    // const {first, last, ...other} = runner;

// nested destructoring

const results = [
    {
        first: "Dan",
        last: "Theman",
        country: "Valhalla"
    },
    {
        first: "Eliud",
        last: "Kipchoge",
        country: "Kenya"
    },
    {
        first: "Galen",
        last: "Rupp",
        country: "US of A"
    }
]

// lets extract the first name of the winner and the country of second place for some reason

    // const [{first: goldWinner},{country}] = results;

// easier to read version of first name and country of 3rd place
// first extract the object we need

const [, , bronze] = results;

// then extract the properties

const {first, country} = bronze;

// destructoring parameters
// I expect an object as a function parameter, but I am only interested in firstname and country

const runner = {
    first1: "Dan",
    last1: "Theman",
    country1: "Alman",
    motto1: "Whoop Whoop"
}

function nameOrigin({first1, country1}) {
    return "Name is " + first1 + " from " + country1;
}

console.log(nameOrigin(runner))

// with arrays

const response = [
    "HTTP/1.1", // protocoll
    "200 OK", // statuscode
    "application/json" // contentType
];

function parseResponse([protocol, statuscode, contentType]) {
    console.log('Status: ' + statuscode);
}



