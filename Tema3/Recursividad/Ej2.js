function factorialIterative(number){
    for(let i = 0; i < number ; i++){
        number *= i;
    }
    return number;
}
factorialIterative(5);