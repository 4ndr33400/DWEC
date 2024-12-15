function calculator(){
    //Crear la matriz inicial y rellenarla con numeros aleatorios
    function createMatrix(){
        let matrix = [];
        for (let i = 0; i < 3; i++){
            matrix[i] = [];
            for(let j = 0; j < 3; j++){
                matrix[i][j] = Math.floor(Math.random() * 100 )
            } 
        }
        return matrix;
    }
    
    // Transponer la matriz
    function transposeMatrix(matrix){
        let transposeMatrix = [];
        
        for(let i = 0; i < 3; i++){
            transposeMatrix[i] = [];
            for(let j = 0; j < 3; j++){
                //Intercambiar filas por columnas
                transposeMatrix[i][j] = matrix[j][i];
            }
        }
        return transposeMatrix;
    }
    //Funcion para imprimir las matrices
    function printMatrix(matrix){
        for(let i = 0; i < matrix.length; i++){
            console.log(matrix[i].join(","));
        }
    }
    //Imprimir los resultados por pantalla
    let initialMatrix = createMatrix();
    console.log("Matriz inicial: ")
    printMatrix(initialMatrix);
    let transposedMatrix = transposeMatrix(initialMatrix);
    console.log("Matriz transpuesta: ")
    printMatrix(transposedMatrix);
}
calculator();