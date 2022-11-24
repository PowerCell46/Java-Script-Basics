function coffeeMachine(input) {
    let typeOfLiquid = input[0];
    let typeOfSugar = input[1];
    let numberOfDrinks = input[2];

    let price = 0;

    switch(typeOfLiquid) {
        case "Espresso": 
        switch(typeOfSugar) {
        case "Without": price = 0.90; break;
        case "Normal": price = 1; break;
        case "Extra": price = 1.20; break;
        } break;

        case "Cappuccino":
        switch(typeOfSugar) {
            case "Without": price = 1; break;
            case "Normal": price = 1.20; break;
            case "Extra": price = 1.60; break;
            } break;

        case "Tea":
        switch(typeOfSugar) {
            case "Without": price = 0.50; break;
            case "Normal": price = 0.60; break;
            case "Extra": price = 0.70; break;
            } break;
    }

    let finalPrice = price * numberOfDrinks;

    if(typeOfSugar === "Without") {
        finalPrice = finalPrice - ((finalPrice /100) * 35);
    }
    if(typeOfLiquid === "Espresso" && numberOfDrinks >= 5) {
        finalPrice = finalPrice - ((finalPrice /100) * 25);
    }
    if(finalPrice > 15) {
        finalPrice = finalPrice - ((finalPrice /100) * 20);
    }
    
    console.log("You bought " + numberOfDrinks + " cups of " + typeOfLiquid + " for " + finalPrice.toFixed(2) + " lv.");
}
coffeeMachine(["Tea",
"Extra",
"3"])

