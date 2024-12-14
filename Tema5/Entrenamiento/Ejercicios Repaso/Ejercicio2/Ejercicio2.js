function deleteForm(){
    document.getElementById("menuForm").reset();
}

function reviewResult() {
    // Precios de cada opción
    const prices = {
        ensalada: 5,
        jamon: 10,
        pavo: 20,
        salmon: 25,
        cheesecake: 8,
        coulaneChocolate: 9,
        fruitSalad: 7,
        sorbete: 6
    };

    // Obtener elementos seleccio+nados
    const starters = document.querySelectorAll('input[name="starters"]:checked');
    const main = document.querySelector('input[name="main"]:checked');
    const dessert = document.getElementById('dessert').value;

    // Crear una lista de resultados
    let resultHTML = '<h2>Tu selección:</h2><ul>';
    let total = 0;

    // Entrantes seleccionados
    if (starters.length > 0) {
        resultHTML += '<li><strong>Entrantes:</strong><ul>';
        starters.forEach((starter) => {
            const id = starter.id;
            const label = starter.parentElement.textContent.trim();
            resultHTML += `<li>${label} - ${prices[id]} €</li>`;
            total += prices[id];
        });
        resultHTML += '</ul></li>';
    } else {
        resultHTML += '<li><strong>Entrantes:</strong> Ninguno seleccionado</li>';
    }

    // Segundo plato seleccionado
    const mainLabel = main.nextSibling.textContent.trim();
    const mainPrice = mainLabel === 'Pavo trufado' ? prices.pavo : prices.salmon;
    resultHTML += `<li><strong>Segundo plato:</strong> ${mainLabel} - ${mainPrice} €</li>`;
    total += mainPrice;

    // Postre seleccionado
    const dessertLabel = document.querySelector(`#dessert option[value="${dessert}"]`).textContent;
    const dessertPrice = prices[dessert];
    resultHTML += `<li><strong>Postre:</strong> ${dessertLabel} - ${dessertPrice} €</li>`;
    total += dessertPrice;

    resultHTML += '</ul>';
    resultHTML += `<h3>Total: ${total} €</h3>`;

    // Mostrar el resultado en el div
    const resultDiv = document.getElementById('result');
    resultDiv.style.display = 'block';
    resultDiv.innerHTML = resultHTML;
}
