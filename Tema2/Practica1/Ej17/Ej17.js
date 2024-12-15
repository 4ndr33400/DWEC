function splitNumbers(){
    //Crear un array con los numeros desordenadois
    let arrayMessyNumbers = [1,5,8,40,100,-3,2.5,3000];
    //Los ordeno de menor a mayor 
    arrayMessyNumbers.sort(function(a, b){return a - b});
    //Encontrar el indice del medio del array
    let middleIndex = Math.floor(arrayMessyNumbers.length/2);
    //Crear dos subarrays para dividir el principañ
    let greaterNumbers = arrayMessyNumbers.slice(middleIndex);
    let lowerNumbers = arrayMessyNumbers.slice(0, middleIndex);
    //Mostrarlo por consola
    console.log("Numeros grandes: " + greaterNumbers);
    console.log("Numeros pequeños: " + lowerNumbers);
}
splitNumbers();