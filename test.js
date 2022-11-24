function checkingNumbers(input) {
    let number = Number(input[0]);
    let checkedNumber = number % 2;
    if (checkedNumber === 0) {
        console.log("even");
    } 
    else {
        console.log("odd");
    }
}
checkingNumbers([155]);