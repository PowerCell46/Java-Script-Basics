function PcGameShop(input) {
let numberOfSoldGames = input[0];
let currentGame = "";

let hearthstoneCounter = 0
let fortniteCounter = 0;
let overwatchCounter = 0;
let others = 0;

for(let index = 1; index <= numberOfSoldGames; index++) {
currentGame = input[index];

switch(currentGame) {
    case "Hearthstone": hearthstoneCounter++; break;
    case "Fornite": fortniteCounter++; break;
    case "Overwatch": overwatchCounter++; break;
    default: others++; break;
}
}
let persantageForOneGame = (100 / numberOfSoldGames);
hearthstoneCounter = hearthstoneCounter * persantageForOneGame;
fortniteCounter = fortniteCounter * persantageForOneGame;
overwatchCounter = overwatchCounter * persantageForOneGame;
others = others * persantageForOneGame;

console.log("Hearthstone - " + hearthstoneCounter.toFixed(2) + "%");
console.log("Fornite - " + fortniteCounter.toFixed(2) + "%");
console.log("Overwatch - " + overwatchCounter.toFixed(2) + "%");
console.log("Others - " + others.toFixed(2) + "%");
}
PcGameShop(["3",
"Hearthstone",
"Diablo 2",
"Star Craft 2"])