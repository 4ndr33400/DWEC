class circle{
    constructor(radius){
        this.radius = radius;
    }
    calculate_area(){
        return Math.PI * Math.pow(this.radius, 2);
    }
    calculate_perimeter(){
        return 2 * Math.PI * this.radius;
    }
    
}


let circle = new Object();
circle.radius = 7;
circle.showCirle = function() {
    
}

console.log(`El área del círculo es: ` + circle.showCirle().toFixed(2));
