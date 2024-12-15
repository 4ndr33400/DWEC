class Contador {
    constructor() {
        this.valor = 0; 
    }
    incrementar() {
        this.valor++;
    }
    mostrar() {
        return this.valor;
    }
}
let contador = new Contador();
let count = document.getElementById("count")
count = contador.incrementar();
let result = document.getElementById("result");
result = contador.mostrar();