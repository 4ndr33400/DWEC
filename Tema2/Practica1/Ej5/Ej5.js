function validateNumber(){
    //Declarar variable
    let number = document.getElementById("number").value;
    //Condicional para saber si es numero o no
    if(isNaN(number)){
        alert("No has introducido un numero");
    } else {
        alert("Has introducido un numero")
    }
}