let cartesian_dot = {
    x: 5,
    y: 0,
    z: 0,
    _quadrant: 0,

    set x(valueX) {
        this._x = valueX;
    },
    get x() {
        return this._x;
    },
    
    set y(valueY) {
        this._y = valueY * 2;
    },
    get y() {
        return this._y;
    },

    set z(valueZ) {
        this._z = Math.sqrt(this.x * valueZ);
    },
    get z() {
        return this._z;
    },


    get quadrant() {
        if (this.x > 0 && this.y > 0) {
            this._quadrant = 1;
        } else if (this.x < 0 && this.y > 0) {
            this._quadrant = 2;
        } else if (this.x < 0 && this.y < 0) {
            this._quadrant = 3;
        } else if (this.x > 0 && this.y < 0) {
            this._quadrant = 4;
        }
        return this._quadrant;
    },

    calculate_distance(){
        return Math.sqrt((Math.pow(this.x,2))*(Math.pow(this.y,2)));
    },
    show_coordenates(){
        console.log(`(${this.x},${this.y},${this.z})`);
    },
    show_quadrant(){
        console.log(`El cuadrante es: ${this.quadrant}`);
    }

}

cartesian_dot.z = 20;
cartesian_dot.y = cartesian_dot.x;

console.log("La distancia es: " + cartesian_dot.calculate_distance());
cartesian_dot.show_coordenates();
cartesian_dot.show_quadrant();

const jsonString = JSON.stringify(cartesian_dot, null, 2);
console.log(jsonString);

