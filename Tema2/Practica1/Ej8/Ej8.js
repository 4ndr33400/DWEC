
    //Declarar vaiables
    const pyramidNumber = document.getElementById("pyramidNumber");
    const result = document.getElementById("result");
    const pyramidBuilder = document.getElementById("pyramidBuilder");
    //Evento que ocurre cada vez que se hace click
    pyramidBuilder.addEventListener('click',() =>{
        const number = parseInt(pyramidNumber.value);
        //Condicional que dice si es un numero valido 
        if(isNaN(number) || number <= 0){
            result.textContent = "Introduce un numero valido";
            return;
        } 
        let pyramid = "";
        //Bucle para formar la piramide
        for(let i = 0; i <= number; i++){
            pyramid += "* ".repeat(i) + "\n";
        }
        result.textContent = pyramid;
    });