class client{
    static #idClient;

    constructor(name,email,phone){
        this.idClient = client.#idClient++;
        this.name = name;
        this.email = email;
        this.phone = phone;    
    }

    show_info(){
        return `${this.name}, ${this.email}, ${this.phone}`;
    }    
}

class bill{
    static #idBill = 0;
    constructor(idClient,amount){
        this.idClient = idClient;
        this.amount = amount;
        this.idBill = idBill;
        this.amount = "pendiente";
    }
    show_info(){
        return `${this.amount}€, Estado: ${this.status}`;
    }
    paid(){
        this.status = "pagada";
    }
    static generateId(){
        return bill.#idBill++;
    }

}
class detailedBill extends bill{
    constructor(articles){
        super(idClient,amount);
        this.articles = articles;
    }
    add_article(){
        let articles = [];
        
    }
}

let client1 = new client("Juan", "juan#mail.com", "634567187");
let client2 = new client("Teresa", "teresa@mail.com", "655561231");
let client3 = new client("Juan", "luis@mail.com", "602354322");