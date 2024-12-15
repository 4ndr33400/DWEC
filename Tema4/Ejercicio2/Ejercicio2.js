let movie = {
    title: "Inception",
    director: "Christopher Nolan",
    year: "2018",
    genre:"Ciencia ficcion",
    show_info:function(){
        return `${this.title} es una película dirigida por ${this.director}, lanzada en ${this.year}, del género ${this.year}.`
    }
}
console.log(movie.show_info());
