
    let arrayProducts = []
    

    function chooseOption(){
        let option = document.getElementById("option").value;
        let name = document.getElementById("nameProduct").value;
        let price = document.getElementById("priceProduct").value;
        let id = document.getElementById("idProduct").value;

        switch(option){
            case "1":
            addProduct(name,price, id);
            break;
            case "2":
            deleteProduct(id);
            break;
            case "3":
            updatePrice(id);
            break;
            case "4": 
            showInventory();
            break;
            case "5":
            showStock();   
            break;     
        }
    }

    function addProduct(name, price, id){
        let newProduct = {name: name, price: price, id: id}
        if (!arrayProducts.includes(newProduct)){
            arrayProducts.push(newProduct);
            document.getElementById("message").textContent = `El producto se añadio con exito.`;
        } else {
            document.getElementById("message").textContent = `Este producto ya se encuentra en el inventario.`
        }
    }

    function deleteProduct(id){
        for(let i = 0; i<arrayProducts.length; i++){
            if(arrayProducts[i].id === id){
                arrayProducts.splice(i, 1);
                document.getElementById("message").textContent = `Se ha borrado el producto con exito.`;
                break;
            } else {
                document.getElementById("message").textContent = `Este producto no se encuentra en el inventario.`;
            }
        }
    }

    function updatePrice(id){
        for(let i = 0; i < arrayProducts.length; i++){
            if(arrayProducts[i].id === id){
                let newPrice = document.getElementById("newPrice").value;
                delete producto[i].price;     
                arrayProducts[i].price = newPrice;
                document.getElementById("message").textContent = `Se ha actualizado el precio con exito.`;
                break;           
            } else {
                document.getElementById("message").textContent = `Este producto no se encuentra en el inventario`;
            }
        }
    }

    function showInventory(){
        for(let i = 0; i < arrayProducts.length; i++){
            document.getElementById("showInventory").textContent = `Nombre del producto: ${arrayProducts[i].name} \nPrecio del producto: ${arrayProducts[i].price} \n --------------------`; 
        }
    }

    function showStock(){
        for(let i = 0; i < arrayProducts.length; i++){
            document.getElementById("showStock").textContent = `Nombre del producto: ${arrayProducts[i].name} \n --------------------`; 
        }
    }
    
