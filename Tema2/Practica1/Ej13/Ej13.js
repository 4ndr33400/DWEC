function lemonsSong(){
    //Declarar variables
    let lemonNumber = parseFloat(document.getElementById("lemonNumber").value);
    let result = document.getElementById("result");
    //Bucle que repite la cancion tantas lineas introducidas menos 1 
    for(let i = 1; i <= lemonNumber; i++){
        result.textContent += `${i} limón, y medio limón.`;
    }
    result.textContent += `¡¡¡Y ${lemonNumber} LIMONES Y MEDIO LIMÓN!!!`;
}
