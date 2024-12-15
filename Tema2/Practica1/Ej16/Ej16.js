function calculator(){
    let condition = false;
    let gradesArray = [];
    while(!condition){
        let grade = prompt("Ingresa una nota o introduzca 'salir': ");
        grade = parseInt(grade);
    
        // Si el usuario ingresa "salir", se termina el proceso
        if (grade.toLowerCase() === "salir"){
            // Si no se han ingresado notas, se muestra un mensaje
            if (gradesArray.length === 0) {
                console.log("No se ingresaron notas.");
                break;
            }

            // Calcula la suma de las notas en el array
            let sum = gradesArray.reduce((acc, curr) => acc + curr,0);
            // Calcula el promedio de las notas
            let average = sum/gradesArray.length;
            // Define si el promedio es aprobado o reprobado
            let averageOverAll = "Reprovado";
            if(average >= 70){
                averageOverAll = "Aprobado";
            }
            // Ordena las notas de menor a mayor
            gradesArray.sort(function(a, b){return a - b});
            // Muestra la información final
            console.log("La media de notas fue: " + average.toFixed(2));
            console.log("La mayoria de los alumnos han " + averageOverAll); 
            console.log(`La nota mas baja fue: ` + gradesArray[0] + `\nLa nota mas alta: ` + gradesArray[gradesArray.length - 1]);
            console.log("Cantidad de notas" + gradesArray.length);
            console.log("adios");

            condition = true;
            
        } else{
            // Convierte la nota introducida a número
            grade = parseFloat(grade);
            // Verifica que la nota esté en el rango válido y sea un número, si no muestra un mensaje de error
            if(!isNaN(grade) && grade >= 0 && grade <= 100){
                gradesArray.push(grade);
            } else {
                console.log("Introduce una nota valida.");
            }
        }
    }
}
calculator();