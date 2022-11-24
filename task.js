function cinema(input) {
    let index = 0;
    let capacityOfTheHall = Number(input[index]);
    index++;
    let currentNumberOfPeople = input[index];
    let priceOfATicket = 5;
    
    let income = 0;
    let numberOfPeople = 0;
    
    while(currentNumberOfPeople !== "Movie time!" && numberOfPeople < capacityOfTheHall) {
        currentNumberOfPeople = Number(input[index]);
        numberOfPeople += currentNumberOfPeople;
        if(numberOfPeople > capacityOfTheHall) {continue;}
        if(currentNumberOfPeople % 3 === 0) {
        income -= 5;
        }
        income += currentNumberOfPeople * priceOfATicket;
        index++;
        currentNumberOfPeople = input[index];
    }
    
    if(currentNumberOfPeople === "Movie time!") {
        let leftSeats = capacityOfTheHall - numberOfPeople;
        console.log( "There are " + leftSeats + " seats left in the cinema.")
    } else if(numberOfPeople >= capacityOfTheHall) {
        console.log("The cinema is full.");
    }
     console.log("Cinema income - " + income + " lv.");
    }
    cinema
    (["100",
"15",
"15",
"15",
"15",
"15", 
"15", 
"15"])