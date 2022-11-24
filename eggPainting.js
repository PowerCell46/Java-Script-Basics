function eggPainting(input) {

let eggSize = input[0];
let eggcolour = input[1];
let partidi = input[2];

let prise = 0;

switch(eggSize) {
    case "Large":
        switch(eggcolour) {
        case "Red": prise = 16; break;
        case "Green": prise = 12; break;
        case "Yellow": prise = 9; break;
        } break;
    case "Medium":
        switch(eggcolour) {
            case "Red": prise = 13; break;
            case "Green": prise = 9; break;
            case "Yellow": prise = 7; break;
            } break;
    case "Small":
        switch(eggcolour) {
            case "Red": prise = 9; break;
            case "Green": prise = 8; break;
            case "Yellow": prise = 5; break;
            } break;
}
let finalPrice = prise * partidi;
let finalFinalPrice = finalPrice - ((finalPrice/100) * 35);

console.log(finalFinalPrice.toFixed(2) + " leva.");
}
eggPainting(["Small", "Yellow", "3"])