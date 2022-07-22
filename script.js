
function hacer () {

    let numero = prompt('Ingrese su presupuesto')

    while (numero != "esc"){
        if (numero > 0 && numero <= 1000){
            alert("Su presupuesto es bajo")
            break;
        }
        else if(numero > 1001 && numero <= 3000){
            alert('Su presupuesto es intermedio')
            break;
        }
        else if (numero > 5000){
            alert('Su presupuesto es alto')
            break;
        }
    }

}