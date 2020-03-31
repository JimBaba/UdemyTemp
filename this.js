// THIS gives back an object, it is a reference to the current scope

function sayHi() {
    console.log("Hi");
    console.log(this)
}

// the sayHi() function is not "floating", but it is a method on the window object,
// which is the global scope of the browser

// using This in methods, the value of This is the object itself. That way we can reference other 
// things within the object within the function inside the object itself

// const person = {
//     first: "Dan",
//     last: "Payne",
//     nickname: "Jim",
//     fullName() {
//         console.log(`${this.first} ${this.last} AKA ${this.nickname}`);
//     }
// }

// we can also destructure this ti make it shorter

const person = {
    first: "Dan",
    last: "Payne",
    nickname: "Jim",
    fullName(){
        const {
            first,
            last,
            nickname
        } = this;
         return `${first} ${last} AKA ${nickname}`
    },
    printBio(){
        console.log(this);
        const fullname = this.fullName();
        console.log(fullname + " is the best person")
    }
}

// know we have a self contained world with its own scope of variables, methods and objects

// we can change the thing this is connected to

const printBio = person.printBio;

// trying again

const info = {
    strasse: "Gerichtstr",
    nummer: 20,
    bewohner: "Familie Naumann",
    printInfo(){
        // console.log(strasse); wont work, because without the this keyword, strasse is not part of the scope
        return this.strasse + ". " + this.nummer + " hier wohnt: " + this.bewohner;
    }
}
