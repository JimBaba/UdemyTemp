

function buildDeck() {
    let deck = [];
    const suits = ["Herz", "Pik", "Karo", "Kreuz"];
    const values = "2,3,4,5,6,7,8,9,10,B,D,K,A";
    for(let value of values.split(",")){
        for(let suit of suits){
            deck.push({
                suit, 
                value})
        }
    }
    return deck;
}

function drawCard(){

}

const myDeck = buildDeck();