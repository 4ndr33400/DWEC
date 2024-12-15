class bookInfo{
    constructor(title,author,yearPublished){
        this.title = title;
        this.author = author;
        this.yearPublished = yearPublished;
    }

    show_info(){
        console.log(`'${this.title}' de ${this.author}, publicado en ${this.yearPublished}.`);
    }
    is_classic(){
        let currentYear = new Date().getFullYear();
        return currentYear - this.yearPublished >= 50;
    }
}
let book = new bookInfo();
book.title = "Frankestein"
book.author = "Mary Shelley";
book.yearPublished = "1818";
book.show_info();
console.log("Este libro " + (book.is_classic() ? "sí" : "no") + " es un clasico.");
  
