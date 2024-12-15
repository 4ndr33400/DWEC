function validateEmail(email){
    let expression = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return expression.test(email);
}
let email1 = "juan.perez@example.com";
let email2 = "juan@ex@ample.com";
let email3 = "@dominio.com";
let email4 = "jose_juan@dominio.es";

let result1 = validateEmail(email1);
let result2 = validateEmail(email2);
let result3 = validateEmail(email3);
let result4 = validateEmail(email4);

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);



