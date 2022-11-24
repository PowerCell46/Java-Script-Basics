function coffeeMachine(input) {
    let drink = input[0];
    let sugar = input[1];
    let numberOfDrinks = input[2];
    let price = 0;

if(numberOfDrinks >= 1 && numberOfDrinks <= 50) {
    switch(drink) {
        case "Espresso":
        switch(sugar) {
            case "Without": price = 0.90; break;
            case "Normal": price = 1; break;
            case "Extra": price = 1.20; break;
        } break;

        case "Cappuccino":
            switch(sugar) {
                case "Without": price = 1; break; 
                case "Normal": price = 1.20; break; 
                case "Extra": price = 1.60; break;
            } break;

        case "Tea": 
            switch(sugar) {
            case "Without": price = 0.50; break;
            case "Normal": price = 0.60; break;
            case "Extra": price = 0.70; break;
        } break;

    }

let finalPrice = price * numberOfDrinks;

if(sugar === "Without") {
    finalPrice = finalPrice - ((finalPrice / 100) * 35);
}

if(drink === "Espresso" && numberOfDrinks >= 5) {
    finalPrice = finalPrice - ((finalPrice / 100) * 25);
}

if(finalPrice > 15) {
    finalPrice = finalPrice - ((finalPrice / 100) * 20);
}

console.log("You bought " + numberOfDrinks + " cups of " + drink + " for " + finalPrice.toFixed(2) + " lv.");
}
}
coffeeMachine(["Tea",
"Extra",
"53"])

