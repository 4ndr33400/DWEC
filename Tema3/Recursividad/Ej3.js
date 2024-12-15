function numberSum(n){
    //Declarar variable
    if(n <= 1){
        return n;
    } else {
        return n + numberSum(n-1);
    }
}
console.log(numberSum(5));