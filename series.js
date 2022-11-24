function series(input) {
    let index = 0;
    let budget = Number(input[index]);
    index++;
    let numberOfSeries = Number(input[index]);
    index++;
    let nameOfTheSeries = input[index];
    index++;
    let priceForTheSeries = Number(input[index]);

    let discount = 0;
    let sumForTheSeries = 0;
    for(let currentSeriesNumber = 1; currentSeriesNumber <= numberOfSeries; currentSeriesNumber++) {
        
        switch(nameOfTheSeries) {
        case "Thrones": discount = 50; break;
        case "Lucifer": discount = 40; break;
        case "Protector": discount = 30; break;
        case "TotalDrama": discount = 20; break;
        case "Area": discount = 10; break;
        default: discount = 0; break;
        }
        if(discount > 0) {
        priceForTheSeries = priceForTheSeries - ((priceForTheSeries / 100) * discount);
        } else {
        priceForTheSeries = priceForTheSeries;
        }
        sumForTheSeries += priceForTheSeries;
        index++;
        nameOfTheSeries = input[index];
        index++;
        priceForTheSeries = Number(input[index]);
    }

    if(budget >= sumForTheSeries) {
        let leftMoney = budget - sumForTheSeries;
        console.log("You bought all the series and left with " + leftMoney.toFixed(2) + " lv.");
    } else if(sumForTheSeries > budget) {
        let neededMoney = sumForTheSeries - budget;
        console.log("You need " + neededMoney.toFixed(2) + " lv. more to buy the series!");
    }
}
series(["25",
"6",
"Teen Wolf",
"8",
"Protector",
"5",
"TotalDrama",
"5",
"Area",
"4",
"Thrones",
"5",
"Lucifer",
"9"])
