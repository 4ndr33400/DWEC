let number = 10;
function isPrimo(number){
    if (number < 2) {
        console.log("No es primo");
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            console.log("No es primo");
           break;
        }
    }
    console.log("Es primo");
}
isPrimo();