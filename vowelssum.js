function summingVowels(input) {
    let word = input[0];
    let sum = 0;
    let letter = word[0];

    for(let currentLetter = letter; currentLetter < word.length; currentLetter++) {
        console.log(currentLetter);
        if(currentLetter === "a") {
        sum+= 1;
        } else if(currentLetter === "e") {
        sum+= 2;
        } else if(currentLetter === "i") {
        sum+= 3;
        } else if(currentLetter === "o") {
        sum+= 4;
        } else if(currentLetter === "u") {
        sum+= 5;
        }
    }

console.log(sum);
}
summingVowels(["hello"]);