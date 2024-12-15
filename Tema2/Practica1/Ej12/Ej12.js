function verifyPrices(){
    //Declarar variables
    let productA = parseFloat(document.getElementById("productA").value);
    let productB = parseFloat(document.getElementById("productB").value);
    let amountProducts = parseInt(document.getElementById("amountProducts").value);

    let result = document.getElementById("result");
    //Calcular el total de ambos parametros
    if(productA === productB){
        let resultOperation = (productA + productB)*amountProducts;
        result.textContent = "El total es: " + resultOperation + "€";
    } else {
        result.textContent = "No se puede realizar la operacion, el precio de los productos es diferente.";
    }
}