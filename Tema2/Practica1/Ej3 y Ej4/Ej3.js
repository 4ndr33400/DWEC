function calcularSalario() {
        //Declarar variables para nombre, apellido, salario y edad
        let nombre = prompt("Introduce tu nombre: ");
        let apellidos = prompt("Introduce tus apellidos: ");
        let salario = parseFloat(prompt("Introduce tu salario (número con decimales): "));
        let edad = parseInt(prompt("Introduce tu edad: "));

        //Calcular el salario 
    if (salario < 2000 && salario > 1000) {
        if (edad > 45) {
            salario = salario * 0.03;
        } else {
            salario = salario * 0.10;
        }
    } else if (salario < 1000) {
        if (edad < 30) {
            salario = 1100;
        } else if (edad < 45 && edad > 30) {
            salario = salario * 0.03;
        } else {
            salario = salario * 0.15;
        }
    }

    //Imprimir por pantalla
    let resultado = `
    <strong><h2> Este es su salario </h2></strong><br>
        Nombre: ${nombre}<br>
        Apellidos: ${apellidos}<br>
        Edad: ${edad}<br>
        Salario actualizado: ${salario.toFixed(2)}
    `;
    document.write(resultado);
}