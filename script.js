function hacer () {

    let nombre = prompt('Ingrese nombre')
    let nombres = []
    
    while (nombre != "voldemort"){
        nombres.push(nombre)
        nombre = prompt('Ingrese nombre')
    }

    alert(nombres)
    

}