function matrix(){
    let numberRows = 3;
    let numberColumns = 3;
    let matrix =[];
    //LLenar la matriz con numeros aleatorios
    for(let i = 0; i < numberRows ; i++){
        matrix[i] = [];
        for(let j = 0; j < numberColumns; j++){
            matrix[i][j] = Math.floor(Math.random() * 100);
        }
    }
    //Mostrar la matriz inicialñ
    console.log("Matriz: ");
    for (let i = 0; i < numberRows; i++) {
        console.log(matrix[i].join(' ')); 
    }    
    //Mostraar los elementos de la diagonal
    console.log ("Elementos de la diagonal: ")
    for(let i = 0; i< numberRows;i++){
        console.log(matrix[i][i]);
    }
}
matrix();