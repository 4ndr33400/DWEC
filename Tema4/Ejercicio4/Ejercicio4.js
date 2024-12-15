class carInfo {
    //Creamos constructor de la clase
    constructor(model,color){
        this.model = model;
        this.color = color;
    }
}
//Declaramos un objeto de carInfo
let car = new carInfo("Mercedes G", "gray");
console.log(car instanceof carInfo);
