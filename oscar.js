function oscars(input) {
let money = Number(input[0]);
let oscars = money - ((money/ 100) * 30);
let catering = oscars - ((oscars / 100) * 15);
let music = (catering / 2);
let totalSum = money + oscars + catering + music;
console.log(totalSum.toFixed(2));
}
oscars(["5555"])