class Vehicle {
    constructor(model, year, price) {
        this.model = model;
        this.price = price;
        this.year = year;
    }
    toString() {
        return `${this.model}, año ${this.year}, ${this.price}€`;
    }
}

class Car extends Vehicle {
    constructor(model, year, price, numberDoors) {
        super(model, year, price);
        this.numberDoors = numberDoors;
    }
    toString() {
        return super.toString() + `, ${this.numberDoors} puertas`;
    }
}

class Bike extends Vehicle {
    constructor(model, year, price, handlebar) {
        super(model, year, price);
        this.handlebar = handlebar;
    }
    toString() {
        return super.toString() + `${this.handlebar}`;
    }
}

class Concesionario {

    constructor(){
        this.vehicles = [];
    }

    addVehicle(vehicle) {
        this.vehicles.push(vehicle);
    }

    showVehicles() {
        for (let i = 0; i < this.vehicles.length; i++) {
            console.log(this.vehicles[i].toString());
        }
    }
}
let newCar = new Car("Seat ibiza","2020","12.900","4");
let newBike = new Bike("Harley","2019","5.000","manillar recto");
let concesionario = new Concesionario();
concesionario.addVehicle(newCar);
concesionario.addVehicle(newBike);
concesionario.showVehicles();