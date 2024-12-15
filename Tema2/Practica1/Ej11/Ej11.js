function throwDice() {
    //Declarar variables
    let resultElement = document.getElementById("result"); 
    let tries = 0;
    let number;
    let resultText = ""; 
    //Bucle para tirar dado
    do {
        number = Math.floor(Math.random() * 6) + 1; 
        tries++;
        resultText += `Tirada ${tries}: Numero :${number}<br>`; 
    } while (number % 2 !== 0);
    //Salida por consola 
    resultText += `Conseguiste un número par después de ${tries} tiradas.`; 
    resultElement.innerHTML = resultText; 
}
