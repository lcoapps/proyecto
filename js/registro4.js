//OCTUBRE 21 DE 2021
const form = document.getElementById('formulario');
//const inputs = document.querySelectorAll('#formulario input') // se pone # para acceder al id
let btnEnvio = document.getElementById("btnEnviar");

// btnEnvio.addEventListener('click', recibirEdad);
// btnEnvio.addEventListener('click', ordenarEdad);
btnEnvio.addEventListener('click', promedioEdad);

//Esto es para que no se envíe vacío
form.addEventListener("submit",function(event)
{
    event.preventDefault();
}
)

//se declaran afuera para que las agregue al arreglo, de lo contrario las inicializa cada que llame la función
let info = [];
let generico = [];
let objeto;

function recibirEdad(){
    let edad;
    edad = prompt('Digite su edad');
    console.log('La edad ingresada es: ' + edad);
    return edad;
}   

function ordenarEdad(edad){
    edad=recibirEdad();
    objeto = {
        'nombre': document.getElementById('campoNombre').value,
        'contrasena': document.getElementById('campoContrasena').value,
        'correo': document.getElementById('campoCorreo').value,
        'confirmacioncontrasena': document.getElementById('campoConfirmarContrasena').value,
        'telefono': document.getElementById('campoTelefono').value,
        'edad': edad
    }
    console.log(objeto);
    info.push(objeto);
    console.log('Arreglo sin ordenar');
    console.log(info);

    //Límite de registros guardados (20)
    if (info.length>20){
        info.splice(info.length-1,1); //Aquí borro la última posición
    }
    //Organizo la función
    info.sort((a, b) => b.edad - a.edad);
    console.log('Arreglo ordenado');
    console.log(info);
    return info;
}

function promedioEdad(args){
    args=ordenarEdad();
    let suma=0;
    let j =0;
    for(var i in args){
        suma = parseInt(suma) + parseInt(args[i]['edad']) ;
        //console.log(suma);
        j++;
    }
    let prom;
    prom = (suma / j);
    console.log('el promedio de edades es: '+ prom);
}


// module.exports.recibirEdad = recibirEdad;
// module.exports.ordenarEdad = ordenarEdad;
// module.exports.promedioEdad = promedioEdad;