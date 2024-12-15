function readParagraph() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let paragraph = document.getElementById("paragraph").value;
    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let paragraphError = document.getElementById("paragraphError");

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
    paragraph1.textContent = text;
    paragraph1.style.fontWeight = "bold";
    paragraph1.style.color = "red";
    column1.appendChild(paragraph1);

    let paragraph2 = document.createElement("p");
    paragraph2.textContent = text;
    paragraph2.style.fontWeight = "bold";
    paragraph2.style.color = "green";
    column2.appendChild(paragraph2);
}
