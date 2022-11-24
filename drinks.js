function drinks(input) {
    let drink = input[0];
    let sugar = input[1];
    let numberOfDrinks = input[2];
    let priceForOneCup = 0;

if(1 <= numberOfDrinks && numberOfDrinks <= 50) {
    switch(drink) {
        case "Espresso":

        switch(sugar) {
            case "Without": priceForOneCup = 0.90; break;
            case "Normal": priceForOneCup = 1; break;
            case "Extra": priceForOneCup = 1.20; break;
        } break;
        case "Cappuccino":

            switch(sugar) {
                case "Without": priceForOneCup = 1; break;
                case "Normal": priceForOneCup = 1.20; break;
                case "Extra": priceForOneCup = 1.60; break;
            } break;
        case "Tea":
            switch(sugar) {
                case "Without": priceForOneCup = 0.50; break;
                case "Normal": priceForOneCup = 0.60; break;
                case "Extra": priceForOneCup = 0.70; break;
            } break;
    } 
    let sum = numberOfDrinks * priceForOneCup;
    if(drink === "Cappuccino" || drink === "Tea" || drink === "Espresso") {
    if(sugar === "Without" || sugar === "Normal" || sugar === "Extra") {

    if(sugar === "Without") {
        sum -= ((sum / 100) * 35);
    }
    if(drink === "Espresso" && numberOfDrinks >= 5) {
        sum -= ((sum / 100) * 25);
    }
    if(sum > 15) {
        sum -= ((sum / 100) * 20);
    }
    console.log("You bought " + numberOfDrinks + " cups of " + drink + " for " + sum.toFixed(2) + " lv.");
}}}
}
drinks(["Tea",
"Extra",
""])
