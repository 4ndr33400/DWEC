
function drawTable(numberRows = 10,numberColumns = 4){

    let numberRows = parseInt(document.getElementById("numberRows").value);
    let numberColumns = parseInt(document.getElementById("numberColumns").value);
    
    let table = document.createElement('table');
    table.setAttribute('border','1');

    for(let i = 0; i < numberRows; i++){
        let row = document.createElement('tr');
        for(let j = 0; j < numberColumns;j++){
            let cell = document.createElement('td');
            cell.textContent = `R${i+1}C${j+1}`;
            row.appendChild(cell);    
        }
        table.appendChild(row);
    }
    let tableContainer = document.getElementById('tableContainer');
    document.getElementById('tableContainer').appendChild(tabla);
    tableContainer.innerHTML = '';
    tableContainer.appendChild(table);
}
