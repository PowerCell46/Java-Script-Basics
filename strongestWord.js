function travelAgency(input) {
let city = input[0];
let typeOfThePackage = input[1];
let vip = input[2];
let numberOfDays = input[3];

let priceForADay = 0;
let vipDiscount = 0;

if(numberOfDays < 1 ) {
    console.log("Days must be positive number!");
} else {

switch(city) {
    case "Bansko":
    switch(typeOfThePackage) {
    case "withEquipment": priceForADay = 100; vipDiscount = 10; break;
    case "noEquipment": priceForADay = 80; vipDiscount = 5; break;
    default: console.log("Invalid input!"); break;
    } break;

    case "Borovets":
        switch(typeOfThePackage) {
            case "withEquipment": priceForADay = 100; vipDiscount = 10; break;
            case "noEquipment": priceForADay = 80; vipDiscount = 5; break;
            default: console.log("Invalid input!"); break;
        } break;

    case "Varna": 
    switch(typeOfThePackage) {
        case "withBreakfast": priceForADay = 130; vipDiscount = 12; break;
        case "noBreakfast": priceForADay = 100; vipDiscount = 7; break;
        default: console.log("Invalid input!"); break;
    } break;

    case "Burgas":
        switch(typeOfThePackage) {
            case "withBreakfast": priceForADay = 130; vipDiscount = 12; break;
            case "noBreakfast": priceForADay = 100; vipDiscount = 7; break;
            default: console.log("Invalid input!"); break;
        } break;

    default: console.log("Invalid input!"); break;
}

if(numberOfDays > 7) {
numberOfDays = numberOfDays - 1;
}
let finalFinalPrice = 0;
let finalPrice = priceForADay * numberOfDays;

if(vip === "yes") {
finalFinalPrice = finalPrice - ((finalPrice / 100) * vipDiscount);
} else if(vip === "no") {
finalFinalPrice = finalPrice;
}

if(finalFinalPrice > 0) {
    console.log("The price is " + finalFinalPrice.toFixed(2) + "lv! Have a nice time!");
}
}
}
travelAgency(["Gabrovo",
"noBreakfast",
"no",
"3"])
