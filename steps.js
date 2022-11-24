function steps(input) {
    let index = 0;
    let steps = Number(input[index]);
    let goalSteps = 10000;
    let stepsTotal = 0;
    let numberOfWalks = Number(input.length);
    let targetReached = false;
    let targetFailed = false;

    while(index < numberOfWalks) {
    stepsTotal+= steps;
    if(stepsTotal >= goalSteps) {
    targetReached = true; break;
    }
    index++;
    steps = input[index];
    
    if(steps === "Going home") {
    index++;
    steps = Number(input[index]);
    stepsTotal+= steps;
    if(stepsTotal < goalSteps) {
    targetFailed = true; break;
    } else if(stepsTotal > goalSteps) {
    targetReached = true; break;
    }
    }
    steps = Number(input[index]);
}

if(targetReached === true) {
console.log("Goal reached! Good job!");
if(stepsTotal > goalSteps) {
let bonusSteps = stepsTotal - goalSteps;
console.log(bonusSteps + " steps over the goal!");
}
}

if(targetFailed === true) {
let neededSteps = goalSteps - stepsTotal;
console.log(neededSteps + " more steps to reach goal.")
}
}
steps(["1500",
"3000",
"250",
"1548",
"2000",
"Going home",
"2000"])
