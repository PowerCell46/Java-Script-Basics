function renovation(input) {
let index = 0;
let height = Number(input[index]);
index++;
let width = Number(input[index]);
index++;
let allHouse = height * width * 4;
let percentageOfNonPaintedWall = Number(input[index]);
let allHouseFinal = allHouse - ((allHouse/100) * percentageOfNonPaintedWall);
    allHouseFinal = Math.ceil(allHouseFinal);
index++;
let currentMeters = input[index];
let allCurrentMeters = 0;

while(currentMeters !== "Tired!") {
    currentMeters = Number(input[index]);
    allCurrentMeters += currentMeters;
    if(allCurrentMeters >= allHouseFinal) {
    break;
    }
    index++;
    currentMeters = input[index];
}

if(currentMeters === "Tired!") {
    let neededMeters = allHouseFinal - allCurrentMeters;
    console.log(neededMeters + " quadratic m left.");
}
if(allCurrentMeters > allHouseFinal) {
    let leftPaint = allCurrentMeters - allHouseFinal;
    console.log("All walls are painted and you have " + leftPaint + " l paint left!");
}
if(allCurrentMeters === allHouseFinal) {
    console.log("All walls are painted! Great job, Pesho!");
}

}
renovation(["2",
"3",
"25",
"6",
"7",
"8"])
