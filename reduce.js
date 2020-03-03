// Reduce: Executes a reducer function on each element of the array, resulting -in a single value-
// for example add all numbers of the array together, reduce the array to the result
// the reduce function looks like: reduce(accumulator, currentValue), where 
// accumulator will store the sum and currentValue is the value of each element

const intArray = [1,2,3,4,5,6,7,8,9];

const addedArray = intArray.reduce((a, b) => {
    return a + b;
});

// an example of getting the highest grade of an array (using accumulator as a save)

const grades = [78,95,68,86,87,92,77,96];

const bestGrade = grades.reduce((best, single) => {
    if(single > best) return single;
    return best;
});

// there is an easier solution though:

const mathMax = grades.reduce((best, single) => (Math.max(best, single)));

// or even easier

const mathMax2 = Math.max(bestGrade);

// reduce() also lets you set an initial value:

const sum = [10,20,30,40,50].reduce((acc, curVal) => {
    return acc + curVal;
}, 100)

// so we start acc with 100 and then add every element to it, 
// instead of just adding all elements together

// tallying up votes into an empty object

const votes = ["y","n","n","n","y","y","y","n","y","n","y","n","y","y",];

const result = votes.reduce((acc, val) => {
    if(acc[val]){
        acc[val]++
    } else {
        acc[val] = 1;
    } return acc;
}, {});

