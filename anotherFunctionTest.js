// A pangram is a sentence that contains every letter of the alphabet, like:
//"The quick brown fox jumps over the lazy dog"

// Write a function called isPangram, which checks to see if a given sentence contains every letter of the alphabet.  Make sure you igore string casing!

// isPangram('The five boxing wizards jump quickly') //true
// isPangram('The five boxing wizards jump quick') //false


function isPangram(sentence) {
    let checkArr = " abcdefghijklmnopqrstuvwxyz";
    let newSen = sentence.toLowerCase();
    for(let char of checkArr) {
        if(newSen.indexOf(char) === -1) {
            return false;
        } 
    }
    return true;
}


isPangram('The five boxing wizards jump quickly');


// Write a getCard() function which returns a random playing card object, like:
//     {
//         value:  "K"
//         suit:   "Clubs"
//     }
// Pick a random value from:
// 2,3,4,5,6,7,8,9,10,J,Q,K,A
// Pick a random suit from :
// clubs, diamond, hearts, spades 
// Return both in an object

function pickFromArr(arr) {
    const rnd = Math.floor(Math.random() * arr.length);
    return arr[rnd];
}


function getCard() {
    const values = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"];
    const suits = ["Diamond","Spades","Hearts","Clubs"];
    
    // der auskommentierte Code ist überflüssig, weil mit
    // pickFromArr() eine funktion geschaffen wurde, die alle arrays randomized
    
    // let valRandomizer = pickFromArr(values);
    // let suiRandomizer = pickFromArr(suits);
    // let valRandomizer = Math.floor(Math.random() * value.length);
    // let suiRandomizer = Math.floor(Math.random() * suit.length);
    // let rndVal = value[valRandomizer]; 
    // let rndSui = suit[suiRandomizer];
    return {
        value     :   pickFromArr(values),
        suit      :   pickFromArr(suits)
    };
    
}

