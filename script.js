alert('Bienvenido')


function hacer (){
    
    for (i = 0; i < 5; i++){
        let letraIngresada = prompt('ingrese una letra')

        if (letraIngresada == "y" || letraIngresada == "Y"){
            alert('Es correcto')
        }
        else{
            alert('ingresar la letra correcta')
        }
    }
}