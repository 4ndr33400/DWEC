function arrayColors(){
    //Declarar arrays
    let colorsArray = ["Orange", "Lime", "Turquoise", "Pink", "Red"]; 
let codeColorsArray = ["#F39C12", "#C0F312", "#12F3E5", "#F312AF", "#F31212"];
let color = document.getElementById("color").value;
//Recorrer el arraay y comparar si el color ingresado coincide con el del array, si es asi el texto cambia de color
for(let i = 0; i < colorsArray.length; i++){
    if(color === colorsArray[i]){
        document.getElementById('text').style.color = codeColorsArray[i];        break;
    }
}
}

