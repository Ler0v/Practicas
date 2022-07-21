alert('Bienvenido')


function hacer () {

    let numero = parseInt(prompt('Selecciona un numero del 1 al 4'))

    switch (numero){
        case 1:
            alert('Su personaje es Homero')
            break;
        case 2:
            alert('Su personaje es Marge')
            break;
        case 3:
            alert('Su personaje es Bart')
            break;
        case 4:
            alert('Su personaje es Lisa')
            break;
        default:
            alert('Anda a decidir entre los 4 pibe')
        }

}