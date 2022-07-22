function hacer () {

    usuarios = []

    for (i = 0; i < 10; i++){
        const usuario = prompt(`Cargar usuario n${i}`);
        usuarios.push(usuario);
    }
    console.log(usuarios)
}