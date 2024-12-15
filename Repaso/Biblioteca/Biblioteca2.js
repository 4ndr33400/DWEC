// Clase base Publicación
class Publicacion {
  static idCounter = 1;  // Contador estático para generar identificadores únicos

  constructor(titulo, autor, tipo) {
      this.isbn = Publicacion.generarId(); // Asignar un ISBN único
      //this.isbn = Publicacion.idCounter++;  // lo mismo que lo anterior
      this.titulo = titulo;
      this.autor = autor;
      this.tipo = tipo;
      this.prestamos = [];

      //Inicializamos el array de préstamos: 12 meses x días en cada mes
      // Hay 2 formas de hacerlo (escoger sólo 1 de las dos)
      // FORMA 1:
      this.prestamos = Array(12).fill().map(() => Array(31).fill(0));

      // FORMA 2:
      for (let mes = 0; mes < 12; mes++) {
            // Crear un array de 31 días (todos inicializados a 0) para cada mes
            this.prestamos[mes] = [];
            for (let dia = 0; dia < 31; dia++) {
                // Inicializamos los días a 0
                this.prestamos[mes][dia] = 0;
            }
      }
  }

  // Método estático para generar un ID único (ISBN)
  static generarId() {
      // Devuelve el valor actual del contador y luego lo incrementa
      return Publicacion.idCounter++;
  }


  // Método para obtener tipo de publicación
  getTipo() {
      return this.tipo;
  }

  mostrar() {
      console.log(`ISBN: ${this.isbn}`);
      console.log(`Título: ${this.titulo}`);
      console.log(`Autor: ${this.autor}`);
      console.log(`Tipo: ${this.tipo}`);
  }

  /*
  // Método para agregar un préstamo en una fecha específica
  registrarPrestamo(mes, dia) {
      if (mes >= 0 && mes < 12 && dia >= 1 && dia <= 31) {
          this.prestamos[mes][dia - 1]++;
      }
  }
  */


  // Método para calcular el total de veces que se ha prestado la publicación en todo el año
  vecesPrestado() {
      let totalPrestado = 0;
      // Recorremos los meses y días, sumando los préstamos
      for (let mes = 0; mes < 12; mes++) {
          for (let dia = 0; dia < 31; dia++) {
              totalPrestado += this.prestamos[mes][dia];
          }
      }
      return totalPrestado;
  }

  // Método que muestra la estadística del día y mes con más préstamos
  estadistica() {
      let maxPrestado = 0;
      let diaMax = 0;
      let mesMax = 0;

      // Buscar el máximo préstamo y su día/mes correspondiente
      for (let mes = 0; mes < 12; mes++) {
          for (let dia = 0; dia < this.prestamos[mes].length; dia++) {
              if (this.prestamos[mes][dia] > maxPrestado) {
                  maxPrestado = this.prestamos[mes][dia];
                  diaMax = dia + 1;
                  mesMax = mes + 1;
              }
          }
      }
      return {dia: diaMax, mes: mesMax, prestamos: maxPrestado};
  }

}


// Clase Comic, hereda de Publicación
class Comic extends Publicacion {
  constructor(titulo, autor, tipo, ilustrador) {
      super(titulo, autor, "comic");
      this.ilustrador = ilustrador;
  }

  mostrar(){
      // Sobreescribimos el método mostrar para añadir los atributos específicos de Comic
      super.mostrar();
      console.log(`Ilustrador: ${this.ilustrador}`);
  }
}

// Clase Revista, hereda de Publicación
class Revista extends Publicacion {
  constructor(titulo, autor, num_revista, director) {
      super(titulo, autor, "revista");
      this.num_revista = num_revista;
      this.director = director;
  }

  mostrar(){
      // Sobreescribimos el método mostrar para añadir los atributos específicos de Comic
      super.mostrar();
      console.log(`Número de revista: ${this.num_revista}`);
      console.log(`Director: ${this.director}`);
  }
}

// Clase Libro, hereda de Publicación
class Libro extends Publicacion {
  constructor(titulo, autor, editorial, idioma) {
      super(titulo, autor, "libro");
      this.editorial = editorial;
      this.idioma = idioma;
  }

  mostrar(){
      // Sobreescribimos el método mostrar para añadir los atributos específicos de Comic
      super.mostrar();
      console.log(`Editorial: ${this.editorial}`);
      console.log(`Idioma: ${this.idioma}`);
  }
}



class Biblioteca {
  constructor() {
      this.publicaciones = [];
}

  // Método para agregar una publicación a la biblioteca
  agregarPublicacion(publicacion) {
      this.publicaciones.push(publicacion);
  }


  // Método para registrar un préstamo de una publicación
  registrarPrestamo2(isbn, mes, dia) {
      const publicacion = this.publicaciones.find(pub => pub.isbn === isbn);
      if (publicacion) {
          // Aumentamos el contador de préstamos en la fecha correspondiente
          if (mes >= 0 && mes < 12 && dia >= 1 && dia <= 31) {
              publicacion.prestamos[mes][dia - 1]++;
              console.log(`Préstamo registrado para el ${dia} del mes ${mes} en la publicación con ISBN ${isbn}.`);
          }
          else {
              console.log('Mes o día inválido.');
          }
      }
      else {
          console.log('Publicación no encontrada.');
      }
  }

  // Lo mismo pero sin usar find()
  registrarPrestamo(isbn, mes, dia) {
      let i = 0;
      let publicacion = null;

      // Usamos un bucle while para recorrer las publicaciones
      while (i < this.publicaciones.length && publicacion === null) {
          if (this.publicaciones[i].isbn === isbn) {
              publicacion = this.publicaciones[i];
          }
          i++;  // Incrementamos el índice
      }

      // Si encontramos la publicación
      if (publicacion) {
          // Aumentamos el contador de préstamos en la fecha correspondiente
          if (mes >= 0 && mes < 12 && dia >= 1 && dia <= 31) {
              publicacion.prestamos[mes][dia - 1]++;
              console.log(`Préstamo registrado para el ${dia} del mes ${mes} en la publicación con ISBN ${isbn}.`);
          }
          else {
              console.log('Mes o día inválido.');
          }
      }
      else {
          console.log('Publicación no encontrada.');
      }
  }



  // Método para mostrar todas las publicaciones
  mostrarPublicaciones() {
      this.publicaciones.forEach(publicacion => {
          publicacion.mostrar();
          console.log('--------------------');
      });
  }

  // Método para obtener el top 5 de best sellers, es decir, los 5 más prestados
  best_sellers() {
      // Crear un array con las publicaciones y sus estadísticas
      const rankings = [];

      // Recorremos todas las publicaciones de la biblioteca
       this.publicaciones.forEach(pub => {
           const totalPrestamos = pub.vecesPrestado();

           // Agregamos la publicación a rankings (array de 4 elementos)
           rankings.push([pub.isbn, pub.titulo, pub.tipo, totalPrestamos]);
      });


      // Ordenamos el array por la cantidad de préstamos de forma descendente
      rankings.sort((a, b) => b[3] - a[3]);  // Comparamos por el cuarto elemento (totalPrestamos)

      // Retornamos los 5 primeros
      return rankings.slice(0, 5);
  }


  mostrarBestSellers() {
      const top5 = this.best_sellers();
      top5.forEach((publicacion, index) => {
          // Acceder a los elementos del array en el orden que hemos definido
          console.log(`ISBN ${index + 1}. Título: ${publicacion[1]} (${publicacion[2]}) - Prestado ${publicacion[3]} veces`);
      });
  }

  /* sin el forEach
  mostrarBestSellers() {
      const top5 = this.best_sellers();
      for (let i = 0; i < top5.length; i++) {
          // Acceder a los elementos del array en el orden que hemos definido
          const publicacion = top5[i];
          console.log(`ISBN ${i + 1}. Título: ${publicacion[1]} (${publicacion[2]}) - Prestado ${publicacion[3]} veces`);
      }
  }
  */



  // Función para encontrar el día en el que se realizan más préstamos
  diaMasPrestamos() {
      let prestamosPorDia = Array(31).fill(0);  // Array para contar los préstamos por cada día (hasta 31 días)

      // Recorremos todas las publicaciones
      for (let i = 0; i < this.publicaciones.length; i++) {
          const pub = this.publicaciones[i];

          // Recorremos los 12 meses
          for (let mes = 0; mes < 12; mes++) {
              // Recorremos los 31 días de cada mes
              for (let dia = 0; dia < pub.prestamos[mes].length; dia++) {
                  // Sumamos los préstamos de ese día (independientemente del mes)
                  prestamosPorDia[dia] += pub.prestamos[mes][dia];
              }
          }
      }

      // Ahora buscamos cuál es el día con el mayor número de préstamos
      let maxPrestado = 0;
      let diaMax = 0;

      for (let dia = 0; dia < 31; dia++) {
          if (prestamosPorDia[dia] > maxPrestado) {
              maxPrestado = prestamosPorDia[dia];
              diaMax = dia + 1;  // El día empieza desde 1, no desde 0
          }
      }

      // Mostramos el resultado
      console.log(`El día con más préstamos es el ${diaMax}, con un total de ${maxPrestado} préstamos.`);
  }

}//fin class Biblioteca



// Ejemplo de uso:
const biblioteca = new Biblioteca();

// Crear publicaciones
const publicaciones = [
  new Comic('Sandman', 'Neil Gaiman', 'comic', 'Sam Kieth'),
  new Revista('Mètode', 'Universidad de Valencia', 12, 'Martí Domínguez'),
  new Libro('Opiniones de un payaso', 'Heinrich Böll', 'Seix Barral', 'es'),
  new Libro('Apuntes del subsuelo', 'Dostoyevski', 'Alianza', 'es'),
  new Comic('Frankenstein', 'Mary Shelley', 'comic', 'Bernie Wrightson'),
  new Revista('Nature', 'VV.AA', 635, 'Magdalena Skipper'),
  new Libro('El extranjero', 'Albert Camus', 'Alianza', 'es'),
  new Comic('Akira', 'Katsuhiro Otomo', 'comic', 'Katsuhiro Otomo'),
  new Libro('El mejor poema del mundo', 'VV.AA', 'Nobel', 'es')
];

// Agregar publicaciones a la biblioteca
publicaciones.forEach(publicacion => biblioteca.agregarPublicacion(publicacion));

// Mostrar biblioteca
console.log("Publicaciones de la Biblioteca:");
biblioteca.mostrarPublicaciones();


// Registrar un préstamo en distinto mes y día
biblioteca.registrarPrestamo(publicaciones[0].isbn, 5, 15);
biblioteca.registrarPrestamo(publicaciones[2].isbn, 5, 15);
biblioteca.registrarPrestamo(publicaciones[1].isbn, 6, 10);
biblioteca.registrarPrestamo(publicaciones[3].isbn, 6, 10);
biblioteca.registrarPrestamo(publicaciones[6].isbn, 9, 5);
biblioteca.registrarPrestamo(publicaciones[0].isbn, 10, 2);
biblioteca.registrarPrestamo(publicaciones[7].isbn, 10, 15);
biblioteca.registrarPrestamo(publicaciones[0].isbn, 10, 15);
biblioteca.registrarPrestamo(publicaciones[1].isbn, 10, 16);
biblioteca.registrarPrestamo(publicaciones[4].isbn, 10, 20);
biblioteca.registrarPrestamo(publicaciones[1].isbn, 11, 9);
biblioteca.registrarPrestamo(publicaciones[0].isbn, 11, 13);
biblioteca.registrarPrestamo(publicaciones[3].isbn, 11, 16);
biblioteca.registrarPrestamo(publicaciones[4].isbn, 11, 17);


// Mostrar el top 5 de best sellers
console.log("\nTop 5 Best Sellers:");
biblioteca.mostrarBestSellers();
console.log();

// Mostrar el día con más préstamos
biblioteca.diaMasPrestamos();