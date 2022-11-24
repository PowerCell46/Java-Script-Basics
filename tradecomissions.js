function task(input) {
let town = input[0];
let sales = Number(input[1]);
let comissions = 0;

}
if(town === "Sofia") {
if(sales >= 0 && sales <= 500) {
comissions = (sales/100) * 5;
} else if(sales >= 500 && sales <= 1000) {
    comissions = (sales/100) * 7;
} else if(sales >= 1000 && sales <= 10000) {
    comissions = (sales/100) * 8;
} else if(sales > 10000) {
    comissions = (sales/100) * 12;
}
console.log(comissions.toFixed(2));
} else if(town === "Varna") {
    if(sales >= 0 && sales <= 500) {
        comissions = (sales/100) * 4.5;
        } else if(sales >= 500 && sales <= 1000) {
            comissions = (sales/100) * 7.5;
        } else if(sales >= 1000 && sales <= 10000) {
            comissions = (sales/100) * 10;
        } else if(sales > 10000) {
            comissions = (sales/100) * 13;
        }
        console.log(comissions.toFixed(2));
} else if(town === "Plovdiv") {
    if(sales < 0) {
        console.log("error");
    }
    if(sales >= 0 && sales <= 500) {
        comissions = (sales/100) * 5.5;
        } else if(sales >= 500 && sales <= 1000) {
            comissions = (sales/100) * 8;
        } else if(sales >= 1000 && sales <= 10000) {
            comissions = (sales/100) * 12;
        } else if(sales > 10000) {
            comissions = (sales/100) * 14.5;
        }
        console.log(comissions.toFixed(2));
} else {
    console.log("error");
}
task(["Varna",
"-3874.50"])
