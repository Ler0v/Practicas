
function hacer () {

    let productos = ["leche","pan","queso","yerba"]

    let entrada = prompt('Ingrese el producto')
    
    let noEstaCargado = true

    productos.forEach(element => {
    
            if (entrada == element){
                alert('El producto esta cargado.')
                noEstaCargado = false
            }
            
    });

    if (noEstaCargado == true){
        alert('El producto no esta cargado.')
    }

}