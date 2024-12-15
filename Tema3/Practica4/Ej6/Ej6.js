function temperatureConersor(){
    //Declarar la variable de temperatura Fahrenheit
    let temperatureFahrenheit = 100;
    //Calcular la temperatura en celsius
    const temperatureCelsius = (fahrenheit) => (fahrenheit - 32) * 5 / 9;    
    //Crear variable que llama a la funcion que calcula la temperatura en celsius
    let celsius = temperatureCelsius(temperatureFahrenheit);
    //Imprimir el resultado por consola
    console.log("Celsius: " + celsius.toFixed(2));
}
temperatureConersor();


