function travelAgency(input) {
    let townName = input[0];
    let typeOfPackage = input[1];
    let vip = input[2];
    let numberOfDays = Number(input[3]);

    if(townName === "Bansko" || townName === "Borovets" || townName === "Varna" || townName === "Burgas" || typeOfPackage === "noEquipment" || typeOfPackage === "withEquipment" || typeOfPackage === "noBreakfast" || typeOfPackage === "withBreakfast") {

    if(numberOfDays >= 1) {

    let priceForOneNight = 0;
        
        switch(typeOfPackage) {
        case "noEquipment": priceForOneNight = 80; break;
        case "withEquipment": priceForOneNight = 100; break;
        case "noBreakfast": priceForOneNight = 100; break;
        case "withBreakfast": priceForOneNight = 130; break;
        default: console.log("Invalid input!"); break;
        }

        let discount = 0;
        let finalPrice = 0;
        if(vip === "yes") {

        switch(townName) {
        case "Bansko": discount = 10; break;
        case "Borovets": discount = 5; break;
        case "Varna": discount = 12; break;
        case "Burgas": discount = 7; break;
        default: console.log("Invalid input!"); break;
        }
        finalPrice = (priceForOneNight * numberOfDays) - (((priceForOneNight * numberOfDays) / 100) * discount);
    } else { 
        finalPrice = priceForOneNight * numberOfDays;
    }

    console.log("The price is " + finalPrice.toFixed(2) + "lv! Have a nice time!");
} else { console.log("Days must be positive number!");}
} else { console.log("Invalid output!");}
}
travelAgency(["Gabrovo",
"noBreakfast",
"no",
"3"])
