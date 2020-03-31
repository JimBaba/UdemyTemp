const reviews = [4.5,3.0,2.8,5.0,4.2,3.7];

    // const getStats = (arr) => {
    //     const max = Math.max(...arr);
    //     const min = Math.min(...arr);
    //     const sum = arr.reduce((total, rev) => total + rev);
    //     const avg = sum / arr.length;
    //     return {
    //         max: max,
    //         min: min,
    //         sum: sum,
    //         avg: avg
    //     }
    // }

// with the new JS version you can shorten the key:value part as it will know what the values are
// if the keys are variable names within the function:


    const getStats = (arr) => {
        const max = Math.max(...arr);
        const min = Math.min(...arr);
        const sum = arr.reduce((total, rev) => total + rev);
        const avg = sum / arr.length;
        return {
            max,
            min,
            sum,
            avg
        }
    }

// computed properties: an easier way to fill objects 

const role = "Director";
const role2 = "Gaffer";
const name = "James Cameron";
const name2 = "Der Gaffer";

const team = {
    [role]: name,
    [role2]: name2,
    [1+4+8]: "thirteen"
}

// add a key and value into a copy of an object

function addProp(obj, key, val) {
    const copy = {
        ...obj
    };
    copy[key] = val;
    return copy;
}

// adding methods to objects (e.g. grouping functions into an object)

const multiply = function(x,y = 1) {
    return x*y;
}

// or declare the function within the object, we can also write it in a way that is
// shorter and doesn't need a key, it just uses the function variable name as key (see divide)

const math = {
    multiply,
    divide(x,y = 1) {return x/y},
    addition: function(x,y = 1) {return x+y},
    subtract: function(x,y = 1) {return x-y}
};

// functions as properties on objects are called methods



