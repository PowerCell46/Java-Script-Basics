function vacation(input) {
    let index = 0;
    let destination = input[index];
    index++;
    let minimumBudget = Number(input[index]);
    let totalMoney = 0;
    index++
    let currentSum = input[index];

    for(let data = input[index]; data !== "End"; index++) {
        currentSum = Number(data);
        while(totalMoney < minimumBudget) {
        totalMoney += currentSum; }
        
        if(totalMoney >= minimumBudget) {
        console.log("Going to " + destination + "!");
        totalMoney -= minimumBudget;
        index++;
        destination = input[index];
        index++;
        minimumBudget = input[index];
        minimumBudget = Number(data);

        }

        }


    }
    vacation(["Greece",
    "1000",
    "200",
    "200",
    "300",
    "100",
    "150",
    "240",
    "Spain",
    "1200",
    "300",
    "500",
    "193",
    "423",
    "End"])
    
