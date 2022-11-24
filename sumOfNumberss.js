function sumOfNumbers(input) {
    let index = 0;
    let currentNumber = input[index];
    
    let sumPrimeNumbers = 0;
    let sumNonPrimeNumbers = 0;

    while(currentNumber !== "stop") {
    currentNumber = Number(input[index]);
        if(currentNumber < 0) {
        console.log("Number is negative.");
        currentNumber = input[index];
        index++;
        continue;
        } else if(currentNumber  === 1) {
        sumNonPrimeNumbers+= currentNumber;
        index++;
        currentNumber = input[index];
        }

        let isPrime = true;
        for( let i = 2; i <= Math.sqrt(currentNumber); i++) {
            if(currentNumber % i === 0) {
            sumNonPrimeNumbers += currentNumber; 
            isPrime = false;
            break;}
        }
        if(isPrime === true) {
            sumPrimeNumbers += currentNumber;
        }
        index++;
        currentNumber = input[index];
    }

    console.log("Sum of all prime numbers is: " + sumPrimeNumbers);
    console.log("Sum of all non prime numbers is: " + sumNonPrimeNumbers);
}
sumOfNumbers(["3",
"9",
"0",
"7",
"19",
"4",
"stop"])



