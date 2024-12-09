function readParagraph() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let paragraph = document.getElementById("paragraph").value;
    
    let nameError = document.getElementById("nameError");
    document.getElementById("nameError").innerHTML = "";

    let emailError = document.getElementById("emailError");
    document.getElementById("emailError").innerHTML = "";

    let paragraphError = document.getElementById("paragraphError");
    document.getElementById("paragraphError").innerHTML = "";

    if (!name) {
        nameError.textContent = "* Este campo es obligatorio";
        return;
    }

    let expression = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email) {
        emailError.textContent = "* Este campo es obligatorio";
        return;
    } else if (!expression.test(email)) {
        emailError.textContent = "* El email no es correcto.";
        return;
    }

    if (!paragraph) {
        paragraphError.textContent = "* Este campo es obligatorio";
        return;
    }

    addParagraph(paragraph);
}

function addParagraph(text) {
    let column1 = document.querySelector(".column:nth-child(1)");
    let column2 = document.querySelector(".column:nth-child(2)");

    let paragraph1 = document.createElement("p");
    let paragraph2 = document.createElement("p");


    paragraph1.textContent = text;
    paragraph1.style.fontWeight = "bold";
    paragraph1.style.color = "red";
    column1.appendChild(paragraph1);

    paragraph2.textContent = text;
    paragraph2.style.fontWeight = "bold";
    paragraph2.style.color = "green";
    column2.appendChild(paragraph2);
}
function cookiesConsent(){
    if (!sessionStorage.getItem('cookieConsent')) {
        const resultado = confirm("Usamos cookies para contar tus visitas. ¿Aceptas?");
        if (resultado) {
            sessionStorage.setItem('cookieConsent', 'true');
        } else {
            sessionStorage.setItem('cookieConsent', 'false');
        }
    }
    return sessionStorage.getItem('cookieConsent') === 'true';
}
function setCookie(name,value,day){
    let date = new Date();
    date.setTime(date.getTime() + (day * 24 * 60 * 1000));
    document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`
}
function getCookie(name){
    let cookie = document.cookie.split('; ');
    for(let i = 0; i < cookie.length; i++){
        let [key, value] = cookie[i].split('=');
        if(key === name)return value;
    }
    return null;
}
function increaseVisits() {
    if (cookiesConsent()) {
        let visits = getCookie('visits');
        visits = visits ? parseInt(visits) + 1 : 1;
        setCookie('visits', visits, 365);
        document.getElementById('visits').textContent = `Has visitado esta página ${visits} veces.`;
    } else {
        deleteCookie('visits');
        document.getElementById('visits').textContent = "No hay visitas.";
    }
}
//Reto 3 y 4
function findWord(){
    let inputWord = document.getElementById("inputWord").value;
    let bodyContent = document.body.innerHTML; 
    let regex = new RegExp(`(${inputWord})`, 'gi'); // Expresión regular para encontrar la palabra.
    document.body.innerHTML = bodyContent.replace(regex, '<mark>$1</mark>');  // Reemplaza las coincidencias con la etiqueta <mark>
}
//Reto 5
function countWords(){
    let numberWords = document.querySelectorAll('p');
    let totalWords = 0;

    numberWords.forEach(numberWords => {
        let text = numberWords.textContent.trim();
        if(text){
            totalWords += text.split(/\s+/).length;
        }
    });
    document.getElementById("numberWords").textContent = `Este texto tiene ${totalWords}`;

}
//Reto 6
function transitionText(){
    let paragraphs = document.querySelectorAll('.container p');
    let i = 0;
    function animationParagraph(){
        if(i < paragraphs.length){
            paragraphs[i].style.opacity = 1;
            paragraphs[i].style.animation = "transitionParagraph 2s ease-in-out";
            i++
            setTimeout(animationParagraph,2000);
        }
    }
}
//Reto 7 


increaseVisits();
document.getElementById("formulario").reset();