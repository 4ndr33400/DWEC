function passwordGenerator(){
    //Llenar el array con numeros aleatorios
    function fillArray(){
        let secretNumberArray = [];
        for (let i = 0; i < 10; i++){
            secretNumberArray[i] = Math.floor(Math.random() * 5)+1; 
        }
        return secretNumberArray;
    }
    //Generar asteriscos teniendo en cuenta el contenido del indice del array
    function generateAsterisc(secretNumberArray){
        for(let i = 0; i < secretNumberArray.length; i++){
            console.log('*'.repeat(secretNumberArray[i]));
        }
    }
    //Crear variable y llamar a la funcion que llena el array
    let generatedArray = fillArray();
    console.log("Contraseña: " + generatedArray);
    //LLamar a la funcion que genera los asteriscos
    generateAsterisc(generatedArray);
}
passwordGenerator();