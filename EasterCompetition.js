function easterCompetition(input) {
let index = 0;
let numberOfKozunaks = Number(input[index]);
let kozunakCounter = 0;
index++;

let baker = "";
let grade = 0;
let finalGrade = 0;
let maxGrade = 0; 
let bestBaker = ""; 

while(kozunakCounter < numberOfKozunaks) {
baker = input[index];
index++;
grade = input[index];

while(grade !== "Stop") {
grade = Number(input[index]);
    finalGrade += grade;
    index++;
    grade = input[index]; 
}

console.log(baker + " has " + finalGrade + " points.");
if(finalGrade > maxGrade) {
    maxGrade = finalGrade;
    bestBaker = baker;
    console.log(baker + " is the new number 1!");
}

finalGrade = 0;
index++;
kozunakCounter++;
}

console.log(bestBaker + " won competition with " + maxGrade + " points!");

}
easterCompetition(["3",

"Chef Manchev",

"10",

"10",

"10",

"10",

"Stop",

"Natalie",

"8",

"2",

"9",

"Stop",

"George",

"9",

"2",

"4", "2", "Stop"])