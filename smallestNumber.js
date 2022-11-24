function smallestNum(input) {
let index = 0;
let inputNumber = input[index];
let minNumber = 1000000;

while(inputNumber !== "Stop") {
    inputNumber = Number(inputNumber);
    
if(inputNumber < minNumber) {
    minNumber = inputNumber;
}
index++;
inputNumber = input[index];
}
console.log(minNumber);
}
smallestNum(["-1",
"-2",
"Stop"])

