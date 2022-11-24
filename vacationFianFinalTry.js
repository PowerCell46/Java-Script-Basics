function trips(input) {
    let index = 0;
    let destination = input[index];
    index++;
    let minimumBudget = Number(input[index]);
    index++;
    let currentSum = Number(input[index]);
    let collectedMoney = currentSum;
    
    while(destination !== "End") {
        while(collectedMoney < minimumBudget) {
            index++;
            currentSum = Number(input[index]);
            collectedMoney += currentSum;
        }
        
        if(collectedMoney >= minimumBudget) {
            collectedMoney -= minimumBudget;
            console.log("Going to " + destination + "!");
            index++;
            destination = input[index];
            index++;
            minimumBudget = Number(input[index]);
        }
    }
}

trips(["France",
"2000",
"300",
"300",
"200",
"400",
"190",
"258",
"360",
"Portugal",
"1450",
"400",
"400",
"200",
"300",
"300",
"Egypt",
"1900",
"1000",
"280",
"300",
"500",
"End"])

