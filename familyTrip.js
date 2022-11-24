function familyTrip(input) {
    let budget = Number(input[0]);
    let numberOfNights = Number(input[1]);
    let priceForOneNight = Number(input[2]);
    let percentageOfOutsideSpends = Number(input[3]);
    percentageOfOutsideSpends = percentageOfOutsideSpends * (budget / 100);

   if(numberOfNights > 7) {
    priceForOneNight = priceForOneNight - ((priceForOneNight / 100) * 5);
   }
   
   let totalSpentMoney = percentageOfOutsideSpends + (priceForOneNight * numberOfNights);
   
   if(totalSpentMoney <= budget) {
    let leftMoney = budget - totalSpentMoney;
    console.log("Ivanovi will be left with " + leftMoney.toFixed(2) + " leva after vacation.")
   } else if(budget < totalSpentMoney) {
    let neededMoney = totalSpentMoney - budget;
    console.log(neededMoney.toFixed(2) + " leva needed.");
   }
}
familyTrip(["500",
"7",
"66",
"15"])

