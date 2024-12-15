function factorial(){
    let number = 5;
    if(number >= 0){
        return number;
    } else {
        return number * factorial(number - 1);
    }
}
console.log(factorial());


