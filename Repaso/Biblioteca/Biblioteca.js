class Publicacion{
    static #isbn;
    vecesPrestado;
    constructor(titulo,autor,tipo){
        this.isbn = Publicacion.#isbn++;
        this.titulo = titulo;
        this.autor = autor;
        this.tipo = tipo;
        this.prestamos = [];
    }
    
    get_tipo(){
     return this.tipo;
    }
    veces_prestado(){
        return this.vecesPrestado++;
    }
    show_info(){
        return `ISBN: ${this.isbn}
        \nTitulo: ${this.titulo}
        \nAutor: ${this.autor}
        \nTipo: ${this.tipo}`;
    }
}

class Comic extends Publicacion{
    constructor(titulo,autor,tipo,isbn,ilustrador){
        super(titulo,autor,tipo,isbn);
        this.ilustrador = ilustrador;
    }
    show_info(){
        return super.show_info() + `\nIlustrador: ${this.ilustrador}`;
    }
}

class Revista extends Publicacion{
    constructor(titulo,autor,tipo,isbn,numero){
        super(titulo,autor,tipo,isbn);
        this.numero = numero;
    }
    show_info(){
        return  super.show_info() +`\nNumero revista: ${this.numero}`;
    }
}

class Libro extends Publicacion{
    constructor(titulo,autor,tipo,isbn,editorial,idioma){
        super(titulo,autor,tipo,isbn);
        this.editorial = editorial;
        this.idioma = idioma;
    }
    show_info(){
        return super.show_info() + `\nEditorial: ${this.editorial}
        \nIdioma: ${this.idioma}`;
    }
}

class Biblioteca{
    constructor(){
        this.publicaciones = []        
    }
    agregar_publicacion(publicacion){
        this.publicaciones.push(publicacion);
    }
    registrar_prestamo(isbn,mes,dia){
        for(let i = 0; i < this.publicaciones.length;i++){
            if(dia >= 1 && dia <= 31 && mes <= 12 && mes >= 1){
                if(publicacion.isbn === isbn){
                    Publicacion.veces_prestado();
                    console.log(`Prestamo registrado para el dia ${dia} del mes ${mes} en la publicacion con ISBN ${isbn}.`);
                    break;
                } else {
                    console.log("La publicacion no se ha encontrado.")
                }
            } else {
                console.log("El dia o mes son incorrectos.")
            }
        }
    }
    best_sellers() {
        const publicacionesOrdenadas = [...this.publicaciones].sort((a, b) => b.vecesPrestado - a.vecesPrestado);
        console.log("Top 5 Best Sellers:");
        for (let i = 0; i < Math.min(5, publicacionesOrdenadas.length); i++) {
          const pub = publicacionesOrdenadas[i];
          console.log(`ISBN: ${pub.isbn} - Título: ${pub.titulo} (${pub.tipo}) - Prestado ${pub.vecesPrestado} veces.`);
        }
    }
    dia_mas_prestamos(){
        
    }

}

let biblioteca = new Biblioteca();

let p1 = new Comic("Sandman","Neil Gaiman","Comic","Sam Kieth");
biblioteca.agregar_publicacion(p1);
console.log(p1.show_info());
let p2 = new Revista("Metode","Universidad de Valencia","Revista",12);
biblioteca.agregar_publicacion(p2);
let p3 = new Libro("Opiniones de un payaso","Heinrich Boll","Libro","Seix Barral","es");
biblioteca.agregar_publicacion(p3);
let p4 = new Libro("Apuntes del subsuelo","Dostoyevski","Libro","Alianza","es");
biblioteca.agregar_publicacion(p4);
let p5 = new Comic("Frankestein","Mary Shelley","Comic","Bernie Wrightston");
biblioteca.agregar_publicacion(p5);
let p6 = new Revista("Nature","VV.AA","Revista",635,"Magdalena Skipper");
biblioteca.agregar_publicacion(p6);
let p7 = new Libro("El extranjero","Albert Camus","Comic","Alianza","fr");
biblioteca.agregar_publicacion(p7);
let p8 = new Comic("Akira","Katsuro Otomo","Comic","Katsuro Otomo");
biblioteca.agregar_publicacion(p8);
let p9 = new Libro("El mejor poema del mundo","VV.AA","Comic","Nobel","es");
biblioteca.agregar_publicacion(p9);

biblioteca.registrar_prestamo(p1.isbn,5,15);
biblioteca.registrar_prestamo(p2.isbn,5,15);
biblioteca.registrar_prestamo(p3.isbn,6,10);
biblioteca.registrar_prestamo(p4.isbn,6,10);
biblioteca.registrar_prestamo(p5.isbn,9,5);
biblioteca.registrar_prestamo(p6.isbn,10,2);
biblioteca.registrar_prestamo(p7.isbn,10,15);
biblioteca.registrar_prestamo(p8.isbn,10,16);
biblioteca.registrar_prestamo(p9.isbn,10,20);