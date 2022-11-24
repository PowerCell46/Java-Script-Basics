function loop() {
for(let a = 1; a <= 10; a++) {

    if(a === 5) { 
        continue // пропуска случая, когато а = 5
    }
    console.log(a)
}
}
loop();