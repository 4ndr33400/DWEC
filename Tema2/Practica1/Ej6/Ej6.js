    //Declarar variables 
    const ageInput = document.getElementById("ageInput");
    const clasify = document.getElementById("clasify");
    const result = document.getElementById("result");
    
    let category;
    //Evento que ocurre cada vez que se hace click 
    clasify.addEventListener('click',() =>{
        const age = ageInput.value.trim();
        const ageNumber = Number(age);
        //Condicional, si se introduce 'salir' abandona el programa
        if(age.toLowerCase() === 'salir'){
            result.textContent = `adios`;
            ageInput.value = ``;
            return;
        }
        //Condicional calcular la edad
        if(!isNaN(ageNumber&& age !== '') && ageNumber >= 0){
            if(ageNumber < 12){
                category = "kid";
            }else if (ageNumber >= 12 && ageNumber <= 17 ){
                category = "teenager";
            } else if (ageNumber >= 18 && age <=64){
                category = "adult";
            } else {
                category = "elder";
            }
            result.textContent = `Eres un@ ${category}`;
    
        } else {
           result.textContent = `Numero invalido`;
        }
    });
    
