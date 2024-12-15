function oddNumber(){
    //Declarar el array
    let array = ["Paramore", "Ghost", "The Strokes", "The Smiths", "The Neighbourhood"];
    const result = document.getElementById('result');
    //Bucle para mostrar los que se encuentran ewn posicion impar
    for (let i = 0; i < array.length; i++) {
        if (i % 2 !== 0) {
            result.textContent += array[i] + "\n";
        }
    }
}