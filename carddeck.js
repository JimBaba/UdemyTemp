

// function buildDeck() {
//     let deck = [];
//     const suits = ["Herz", "Pik", "Karo", "Kreuz"];
//     const values = "2,3,4,5,6,7,8,9,10,B,D,K,A";
//     for(let value of values.split(",")){
//         for(let suit of suits){
//             deck.push({
//                 suit, 
//                 value})
//         }
//     }
//     return deck;
// }

// function drawCard(deck){
//     return deck.pop();
// }


// const myDeck = {
//     deck:[],
//     drawnCards:[],
//     suits:["Herz", "Pik", "Karo", "Kreuz"],
//     values:"2,3,4,5,6,7,8,9,10,B,D,K,A",
//     initDeck(){
//         const {suits, values, deck} = this
//         for(let value of values.split(",")) {
//             for(let suit of suits){
//                 deck.push({suit, value})
//             }
//         }
//     },
//     drawCard(){
//         const draw = this.deck.pop();
//         this.drawnCards.push(draw);
//         return draw;
//     },
//     drawMultiple(num){
//         const cards = [];
//         while(num > 0){
//             cards.push(this.drawCard());
//             num--;
//         }
//         return cards;
//     },
//     shuffleCards(){
//         const {deck} = this;
//         for(let i = deck.length -1; i > 0; i--){
//             let j = Math.floor(Math.random() * (i + 1));
//             [deck[i], deck[j]] = [deck[j], deck[i]];
//         }
//     }
// }



const makeDeck = () => {
        return {
            deck:[],
            drawnCards:[],
            suits:["Herz", "Pik", "Karo", "Kreuz"],
            values:"2,3,4,5,6,7,8,9,10,B,D,K,A",
            initDeck(){
                const {suits, values, deck} = this
                for(let value of values.split(",")) {
                    for(let suit of suits){
                        deck.push({suit, value})
                    }
                }
            },
            drawCard(){
                const draw = this.deck.pop();
                this.drawnCards.push(draw);
                return draw;
            },
            drawMultiple(num){
                const cards = [];
                while(num > 0){
                    cards.push(this.drawCard());
                    num--;
                }
                return cards;
            },
            shuffleCards(){
                const {deck} = this;
                for(let i = deck.length -1; i > 0; i--){
                    let j = Math.floor(Math.random() * (i + 1));
                    [deck[i], deck[j]] = [deck[j], deck[i]];
                }
            }
        }
    }

const myDeck = makeDeck();
myDeck.initDeck();
myDeck.shuffleCards();
const h1 = myDeck.drawMultiple(2);
const h2 = myDeck.drawMultiple(2);
const h3 = myDeck.drawMultiple(5);
console.log(h1,h2,h3,myDeck.drawnCards);

const otherDeck = makeDeck();
otherDeck.initDeck();
