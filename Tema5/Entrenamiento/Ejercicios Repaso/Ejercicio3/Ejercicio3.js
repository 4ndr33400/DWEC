<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Adopción de Animales</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin: 20px;
        }
        select, button {
            padding: 10px;
            font-size: 16px;
            margin: 10px;
        }
        .animal-card {
            display: inline-block;
            border: 1px solid #ccc;
            border-radius: 8px;
            padding: 15px;
            margin: 10px;
            width: 200px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .animal-card img {
            width: 100%;
            border-radius: 8px;
        }
    </style>
</head>
<body>
    <h1>Encuentra tu mascota ideal</h1>
    <form id="animalForm">
        <label for="tipo">Selecciona un tipo de animal:</label>
        <select id="tipo">
            <option value="Perro">Perro</option>
            <option value="Gato">Gato</option>
        </select>
        <button type="button" onclick="mostrarAnimales()">Mostrar animal</button>
    </form>

    <div id="resultado"></div>

    <script>
        // Clases base y derivadas
        class Animal {
            constructor(nombre, especie, imagen, edad) {
                this.nombre = nombre;
                this.especie = especie;
                this.imagen = imagen;
                this.edad = edad;
            }

            info() {
                return `${this.nombre}, ${this.especie}, Edad: ${this.edad} años`;
            }
        }

        class Perro extends Animal {
            constructor(nombre, especie, raza, imagen, edad) {
                super(nombre, especie, imagen, edad);
                this.raza = raza;
            }

            info() {
                return `${super.info()}, Raza: ${this.raza}`;
            }
        }

        class Gato extends Animal {
            constructor(nombre, especie, color, imagen, edad) {
                super(nombre, especie, imagen, edad);
                this.color = color;
            }

            info() {
                return `${super.info()}, Color: ${this.color}`;
            }
        }

        // Array con animales
        const animales = [
            new Perro("Max", "Canino", "Pastor Alemán", "https://i.postimg.cc/8zkSRCJW/max.png", 5),
            new Perro("Rex", "Canino", "Golden Retriever", "https://i.postimg.cc/NjNwpwmn/rex.png", 3),
            new Perro("Federico", "Canino", "Firulais", "https://i.postimg.cc/hP1nQmjc/federico.png", 7),
            new Gato("Scar", "Felino", "Blanco", "https://i.postimg.cc/zfVYQPkG/scar.png", 2),
            new Gato("Luna", "Felino", "Negro", "https://i.postimg.cc/gkWd0sGg/luna.png", 4)
        ];

        // Función para mostrar los animales
        function mostrarAnimales() {
            const tipoSeleccionado = document.getElementById("tipo").value;
            const resultado = document.getElementById("resultado");
            resultado.innerHTML = ""; // Limpiar resultados anteriores

            // Filtrar y mostrar animales
            animales.filter(animal => animal.constructor.name === tipoSeleccionado)
                    .forEach(animal => {
                        const card = document.createElement("div");
                        card.className = "animal-card";
                        card.innerHTML = `
                            <img src="${animal.imagen}" alt="${animal.nombre}">
                            <p>${animal.info()}</p>
                        `;
                        resultado.appendChild(card);
                    });
        }
    </script>
</body>
</html>