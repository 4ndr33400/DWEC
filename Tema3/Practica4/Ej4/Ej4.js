function allPrimeNumbersFrom1To100() {
    let primeNumbers = '';
    for(let number = 1; number <= 1000; number++) {
        let isPrime = true; 
        for(let i = 2; i <= Math.sqrt(number); i++) {
            if(number % i === 0) {
                isPrime = false; 
                break;
            }
        }
            if(isPrime && number > 1) {
            primeNumbers += number + ' ';   
        }
    }
    document.getElementById('result').textContent = primeNumbers;
}
allPrimeNumbersFrom1To100();