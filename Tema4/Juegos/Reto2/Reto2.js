//Hecho por Edgar y Andrea
let currentDate = new Date();
let dateFormat1 = currentDate.getDate() + "/" + (currentDate.getMonth() + 1) + "/" + currentDate.getFullYear();
let dateFormat2 = (currentDate.getMonth() + 1) + "/" + currentDate.getDate() + "/" + currentDate.getYear();
console.log(dateFormat1);
console.log(dateFormat2);
