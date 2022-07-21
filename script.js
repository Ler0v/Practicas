alert('Bienvenido')


function hacer (){
    
    for (i = 0; i < 10; i++){
        let nombre1 = prompt('Ingrese nombre 1')
        let nombre2 = prompt('Ingrese nombre 2')
        if (nombre1 != nombre2){
            alert('El nombre es distinto')
        }
        else{
            if(nombre1 == nombre2){
                alert("El nombre es igual")
            }
        }
    }
}