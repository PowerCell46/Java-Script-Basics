function club(input) {
    let index = 0;
    let goalMoney = Number(input[index]);
    index++
    let collectedMoney = 0;
    let currentMoney = 0;

    let nameOfTheCoctail = input[index];
    index++;
    let numberOfCoctails = Number(input[index]);
    let priceOfTheCoctail = (nameOfTheCoctail.length);
    
    while(collectedMoney < goalMoney && nameOfTheCoctail !== "Party!" && numberOfCoctails !== "Party!") {
        numberOfCoctails = Number(input[index]);
        priceOfTheCoctail = Number(nameOfTheCoctail.length);
        currentMoney = priceOfTheCoctail * numberOfCoctails;
        if(currentMoney % 2 !== 0) {
        currentMoney = currentMoney - ((currentMoney/100) * 25);
        }
        collectedMoney += currentMoney;
        index++;
        nameOfTheCoctail = input[index];
        if(nameOfTheCoctail === "Party!") { 
        continue;
        }
        index++;
        numberOfCoctails = input[index];
    }
    
    if(input[index] === "Party!") {
        let neededMoney = goalMoney - collectedMoney;
        console.log("We need " + neededMoney.toFixed(2) + " leva more."); 
    }
    if(collectedMoney >= goalMoney) {
        console.log("Target acquired.");  
    }

    console.log("Club income - " + collectedMoney.toFixed(2)  + " leva.");
}
club(["100",
"Sidecar",
"7",
"Mojito",
"5",
"White Russian",
"10"])
