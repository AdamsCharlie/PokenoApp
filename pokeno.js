let hidden;
let deck;
let cardHistory = [];

window.onload = function() {
    buildDeck();
    shuffleDeck();
    startGame();
}

function buildDeck() {
    let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    let suit = ["♠", "♣", "♥", "♦"];
    deck = [];

    for (let i = 0; i < suit.length; i++) {
        for (let j = 0; j < values.length; j++) {
            deck.push(suit[i] + values[j]); 
        }
    }
}

function shuffleDeck() {
    buildDeck();
    for (let i = 0; i < deck.length; i++) {
        let j = Math.floor(Math.random() * deck.length);
        let temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }

    document.getElementById("discard-card").src = "";    
    cardHistory = [];
    document.getElementById("card-history-values").innerHTML = cardHistory;

}

function startGame() {
    hidden = deck.pop();
    
    document.getElementById("draw").addEventListener("click", draw);
    document.getElementById("shuffle").addEventListener("click", shuffleDeck);
}

function draw() {
    let cardImg = document.createElement("img");
    let card = deck.pop();
    cardImg.src = "./cards_suit_first/" + card + ".png";
    document.getElementById("discard-card").src = cardImg.src;
    cardHistory.push(" " + card);    
    document.getElementById("card-history-values").innerHTML = cardHistory.sort();
}

function clearyHistory () {
    cardHistory = [];
}

