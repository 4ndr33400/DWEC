function howRandomIsMath(){
    //Declaro parametros de randomNumber y array de frecuencia
    let randomNumber = 0;
    let frecuency = [];
    //Genero los 10.000 numeros random
    for(let i = 0; i < 10000 ; i++) {
        randomNumber = Math.floor(Math.random() * 10);
        frecuency[randomNumber]++;
    }
    //Agrupar los numeros del array 
    for(let number in frecuency){
        console.log(`Numero ${number} : ${frecuency[number]} veces`)
    }
}
howRandomIsMath();