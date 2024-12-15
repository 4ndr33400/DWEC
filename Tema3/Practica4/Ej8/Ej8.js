function findTheLetter(){
    //Declarar las string y el booleano
    let word1 = "amor";
    let word2 = "romt";
    let sameLetters = true;
    //Paso las cadenas a arrays y los ordeno
    let array1 = word1.toLowerCase().split('');
    let array2 = word2.toLowerCase().split('');
    array1.sort();
    array2.sort();
    //Comparo si hay algun indice de los arrays que sea diferente
    if(array1.length !== array2.length){
        sameLetters = false;
    } else {
        for(let i = 0; i < array1.length; i++){
            if(array1[i] !== array2[i]){
                sameLetters = false;
                break;
            }
        }
    }
    //Imprimo por consola la solucion
    if(sameLetters){
        console.log ("Tienen las mismas letras");
    } else {
        console.log("No tienen las mismas letras");
    }
}
findTheLetter();