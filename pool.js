function pool(input) {
    let numberOfPeople = Number(input[0]);
    let entryFee = Number(input[1]);
    let priceForAChair = Number(input[2]);
    let priceForAnUmbrella = Number(input[3]);

    let entreeFeeAll = numberOfPeople * entryFee;
    let priceForAChairAll = ((numberOfPeople/ 100) * 75) 
    let priceForAChairAlll = Math.ceil(priceForAChairAll) * priceForAChair;
    let priceForAnUmbrellaAll = (numberOfPeople/ 2) 
    let priceForAnUmbrellaAlll = Math.ceil(priceForAnUmbrellaAll) * priceForAnUmbrella;
    let finalPrice = entreeFeeAll + priceForAChairAlll + priceForAnUmbrellaAlll;

    console.log(finalPrice.toFixed(2) + " lv.");
}
pool(["100",
"8",
"6",
"4"])
