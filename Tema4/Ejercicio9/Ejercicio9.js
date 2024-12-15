class dot2D {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
}
class straight extends dot2D{
    constructor(p1,p2){
        super(p1.x, p1.y)
        this.p2 = p2;
    }
    get length(){
        return Math.sqrt(Math.pow((this.p2.x - this.p1.x), 2) + Math((this.p2.y - this.p1.y), 2));
    }

}

let dot1 = new dot2D(4, 6);
let dot2 = new dot2D(3,3);
let straight1 = new straight(dot1,dot2);
console.log(straight1.length);