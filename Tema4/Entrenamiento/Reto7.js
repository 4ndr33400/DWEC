//a) Extrae un numero de una cadena
let str1 = "Tengo 10 manzanas";
let expression1 = /\d+/;
let result1 = expression1.exec(str1);
console.log(result1[0]);

//b) Busca una palabra especifica en una cadena 
let str2 = "El DNA está formado por las bases ACGT, que se combinan para almacenar la información genética";
let expression2 = /(ACGT)+/;
let result2 = expression2.exec(str2);
console.log(result2[0]);

//c) Encuentra todas las coincidencias de una palabra
let str3 = "La casa es amarilla";
let expression3 = /a/g;
let result3 = str3.match(expression3);
console.log(result3);

//d) Extrae la fecha de un texto
let str4 = "La fecha es 15-08-2024";
let expression4 = /(\d{2})-(\d{2})-(\d{4})/;
let result4 = str4.match(expression4);
let day = result4[1];
let month = result4[2];
let year = result4[3];
console.log(`Dia: ${day}, Mes: ${month}, Año: ${year}`);

//e) Reemplazar todas las ocurrencias de una palabra
let str5 = "Glucosa y ácido láctico son dos metabolitos clave en el proceso de la glucólisis.";
let expression5 = /láctico/;
let result5 = str5.split(expression5).join("pirúvico");
console.log(result5);

//f) Busca una url
let str6 = "Visita nuestro sitio en https://www.ejemplo.com";
let expression6 = /https?:\/\/[^\s]+/;
let result6 = expression6.exec(str6);
console.log(result6[0]);