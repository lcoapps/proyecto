//OCTUBRE 21 DE 2021
const form = document.getElementById('formulario');
//const inputs = document.querySelectorAll('#formulario input') // se pone # para acceder al id
let btnEnvio = document.getElementById("btnEnviar");

// btnEnvio.addEventListener('click', recibirEdad);
btnEnvio.addEventListener('click', ordenarEdad);

//Esto es para que no se envíe vacío
form.addEventListener("submit",function(event)
{
    event.preventDefault();
}
)

function recibirEdad(){
    let edad;
    edad = prompt('Digite su edad');
    console.log('La edad ingresada es: ' + edad);
    return edad;
}   

function ordenarEdad(edad){
    edad= recibirEdad()
    console.log('La edad registrada es: ' + edad);
    let objeto = {
        'nombre': document.getElementById('campoNombre').value,
        'contrasena': document.getElementById('campoContrasena').value,
        'correo': document.getElementById('campoCorreo').value,
        'confirmacioncontrasena': document.getElementById('campoConfirmarContrasena').value,
        'telefono': document.getElementById('campoTelefono').value,
        'edad': edad
    }
    console.log(objeto);
    return objeto;
}

/* function promedioEdad(objeto){

} */

// module.exports.recibirEdad = recibirEdad;
// module.exports.ordenarEdad = ordenarEdad;
// module.exports.promedioEdad = promedioEdad;