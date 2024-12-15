class Publicacion {
    static isbnCounter = 1; // Contador estático para generar ISBN
    constructor(titulo, autor, tipo) {
      this.isbn = Publicacion.isbnCounter++; // Generar un ISBN único
      this.titulo = titulo;
      this.autor = autor;
      this.tipo = tipo;
      this.vecesPrestado = 0; // Contador de veces prestado
    }
  
    veces_prestado() {
      this.vecesPrestado++;
    }
  
    show_info() {
      return `ISBN: ${this.isbn}\nTítulo: ${this.titulo}\nAutor: ${this.autor}\nTipo: ${this.tipo}`;
    }
  }
  
  class Comic extends Publicacion {
    constructor(titulo, autor, ilustrador) {
      super(titulo, autor, "Comic");
      this.ilustrador = ilustrador;
    }
  
    show_info() {
      return super.show_info() + `\nIlustrador: ${this.ilustrador}`;
    }
  }
  
  class Revista extends Publicacion {
    constructor(titulo, autor, numero) {
      super(titulo, autor, "Revista");
      this.numero = numero;
    }
  
    show_info() {
      return super.show_info() + `\nNúmero revista: ${this.numero}`;
    }
  }
  
  class Libro extends Publicacion {
    constructor(titulo, autor, editorial, idioma) {
      super(titulo, autor, "Libro");
      this.editorial = editorial;
      this.idioma = idioma;
    }
  
    show_info() {
      return super.show_info() + `\nEditorial: ${this.editorial}\nIdioma: ${this.idioma}`;
    }
  }
  
  class Biblioteca {
    constructor() {
      this.publicaciones = [];
    }
  
    agregar_publicacion(publicacion) {
      this.publicaciones.push(publicacion);
    }
  
    registrar_prestamo(isbn, mes, dia) {
      if (dia < 1 || dia > 31 || mes < 1 || mes > 12) {
        console.log("El día o mes son incorrectos.");
        return;
      }
  
      for (let i = 0; i < this.publicaciones.length; i++) {
        if (this.publicaciones[i].isbn === isbn) {
          this.publicaciones[i].veces_prestado();
          console.log(`Préstamo registrado para el día ${dia} del mes ${mes} en la publicación con ISBN ${isbn}.`);
          return;
        }
      }
  
      console.log("La publicación no se ha encontrado.");
    }
  
    best_sellers() {
      const publicacionesOrdenadas = [...this.publicaciones].sort((a, b) => b.vecesPrestado - a.vecesPrestado);
      console.log("Top 5 Best Sellers:");
      for (let i = 0; i < Math.min(5, publicacionesOrdenadas.length); i++) {
        const pub = publicacionesOrdenadas[i];
        console.log(`ISBN: ${pub.isbn} - Título: ${pub.titulo} (${pub.tipo}) - Prestado ${pub.vecesPrestado} veces.`);
      }
    }
  
    dia_mas_prestamos() {
      // Implementar si tienes datos específicos para calcular el día con más préstamos
      console.log("Método no implementado.");
    }
  }
  
  // Ejemplo de uso
  const biblioteca = new Biblioteca();
  
  const p1 = new Comic("Sandman", "Neil Gaiman", "Sam Kieth");
  biblioteca.agregar_publicacion(p1);
  
  const p2 = new Revista("Metode", "Universidad de Valencia", 12);
  biblioteca.agregar_publicacion(p2);
  
  const p3 = new Libro("Opiniones de un payaso", "Heinrich Boll", "Seix Barral", "es");
  biblioteca.agregar_publicacion(p3);
  
  const p4 = new Libro("Apuntes del subsuelo", "Dostoyevski", "Alianza", "es");
  biblioteca.agregar_publicacion(p4);
  
  const p5 = new Comic("Frankenstein", "Mary Shelley", "Bernie Wrightston");
  biblioteca.agregar_publicacion(p5);
  
  biblioteca.registrar_prestamo(p1.isbn, 5, 15);
  biblioteca.registrar_prestamo(p2.isbn, 5, 15);
  biblioteca.registrar_prestamo(p3.isbn, 6, 10);
  biblioteca.registrar_prestamo(p4.isbn, 6, 10);
  biblioteca.registrar_prestamo(p5.isbn, 9, 5);
  
  biblioteca.best_sellers();
  