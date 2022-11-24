function exam(input) {
let index = 0;
let numberOfStudents = Number(input[index]);
index++;
let currentGrade = Number(input[index]);

let twoCounter = 0;
let threeCounter = 0;
let fourCounter = 0;
let fiveCounter = 0;

let sumOfGrades = 0;

for(let currentStudent = 1; currentStudent <= numberOfStudents; currentStudent++) {
    
    if(currentGrade >= 2.00 && currentGrade <= 2.99) {
        twoCounter++;
        sumOfGrades+= currentGrade;
    } else if(currentGrade >= 3 && currentGrade <= 3.99) {
        threeCounter++;
        sumOfGrades+= currentGrade;
    } else if(currentGrade >= 4 && currentGrade <= 4.99) {
        fourCounter++;
        sumOfGrades+= currentGrade;
    } else if(currentGrade >= 5) {
        fiveCounter++;
        sumOfGrades+= currentGrade;
    }
    index++;
    currentGrade = Number(input[index]);
}
let onePercent = (numberOfStudents / 100);
let twoPercentage = twoCounter / onePercent;
let threePercantage = threeCounter / onePercent;
let fourPercantage =  fourCounter / onePercent;
let fivePercantage =  fiveCounter / onePercent;
let averageScore = (sumOfGrades / numberOfStudents);

console.log("Top students: " + fivePercantage.toFixed(2) + "%");
console.log("Between 4.00 and 4.99: " + fourPercantage.toFixed(2) + "%");
console.log("Between 3.00 and 3.99: " + threePercantage.toFixed(2) + "%");
console.log("Fail: " + twoPercentage.toFixed(2) + "%");
console.log("Average: " + averageScore.toFixed(2));
}
exam(["6",
"2",
"3",
"4",
"5",
"6",
"2.2"])

