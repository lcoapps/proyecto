const form = document.getElementById('formulario');
//const inputs = document.querySelectorAll('#formulario input') // se pone # para acceder al id
let btnEnvio = document.getElementById("btnEnviar");
btnEnvio.onclick = validar_nombre;

//Expresiones regulares para realizar las validaciones
const expresiones = {
	//usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{4,30}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const campos = {
    //usuario: false,
    nombre: false,
	password: false,
	correo: false,
	telefono:false,
}

//Esto es para que no se envíe vacío
form.addEventListener("submit",function(event)
{
    event.preventDefault();
}
)

//VALIDACIÓN DE CAMPO NOMBRE

/* Debe cumplir con las siguientes condiciones:
• Debe tener una longitud mayor a 4
• Debe tener una longitud máxima de 30 caracteres
• No puede tener ningún carácter especial como: ‘@’, ‘!’,’_’,’
• No debe contener ningún número */

function validar_nombre(txtNombre){
    txtNombre = document.getElementById('campoNombre'); //Obtengo el valor ingresado en el input
    console.log(txtNombre.value);
/* 	let tfData=new FormData(formulario);
    var txtNombre=tfData.get("campoNombre"); */
	if (txtNombre.value.length<4 || txtNombre.value.length>30){
		alert("Longitud No VALIDA");            
	} else {
		alert("longitud válida")
	}	


/* 	if(expresiones.nombre.test(txtNombre.value)){
		alert("Cumple")
		expresiones.nombre = true;
	} else {
		alert("No Cumple")
		expresiones.nombre = false;
	} */

}

//VALIDACIÓN CAMPO CONTRASEÑA

/* Ambos strings deben cumplir con las siguientes condiciones:
• Se debe verificar en un principio que el campo confirmar contraseña no sea dejado vacío o nulo.
• Las cadenas deben coincidir en un principio en longitud.
• Se debe verificar que sean exactamente iguales en cada una de las posiciones de las cadenas. */

function validar_contrasenas(password1, password2){
    password1 = document.getElementById('campoConfirmarContrasena'); //Obtengo el valor ingresado en el input
    console.log(password1.value);
	password2 = document.getElementById('password2');
	console.log(password2.value);

	if (password1.value.length == 0 || password2.value.length == 0){
		alert("Agregue una contraseña")
	} else if (password1.value == password2.value){
		console.log("Tienen la misma longitud")
		expresiones.password = true;
	} else {
		console.log("No Cumple")
		expresiones.password = false;
	}

}

module.exports.validar_nombre = validar_nombre;
module.exports.validar_contrasenas = validar_contrasenas;