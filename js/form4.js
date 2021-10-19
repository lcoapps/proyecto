//OCTUBRE 19 DE 2021
const form = document.getElementById('formulario');
//const inputs = document.querySelectorAll('#formulario input') // se pone # para acceder al id
let btnEnvio = document.getElementById("btnEnviar");

btnEnvio.addEventListener('click', validar_nombre);
btnEnvio.addEventListener('click', validar_contrasenas);
//btnEnvio.onclick = validar_nombre && validar_contrasenas;
// btnEnvio.onclick=validar_nombre, validar_contrasenas;

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

//FUNCIÓN PARA VALIDACIÓN DE CAMPO NOMBRE

/* Debe cumplir con las siguientes condiciones:
• Debe tener una longitud mayor a 4
• Debe tener una longitud máxima de 30 caracteres
• No puede tener ningún carácter especial como: ‘@’, ‘!’,’_’,’
• No debe contener ningún número */

function validar_nombre(txtNombre){
    txtNombre = document.getElementById('campoNombre').value; //Obtengo el valor ingresado en el input
    console.log(txtNombre);
/* 	let tfData=new FormData(formulario);
    var txtNombre=tfData.get("campoNombre"); */

	//PRUEBA LONGITUD
/* 	if (txtNombre.length<4 || txtNombre.length>30){
		alert("Longitud No VALIDA");            
	} else {
		alert("longitud válida")
	}	 */

	if (expresiones.nombre.test(txtNombre)){
		console.log("OK Validación")
		return true;
	} else {
		console.log("El nombre debe ser mayor a 4, menor a 30 y NO debe contener caracteres especiales, ni números")
		return false;
	}
}

//FUNCIÓN PARA VALIDACIÓN CAMPO CONTRASEÑA

/* Ambos strings deben cumplir con las siguientes condiciones:
• Se debe verificar en un principio que el campo confirmar contraseña no sea dejado vacío o nulo.
• Las cadenas deben coincidir en un principio en longitud.
• Se debe verificar que sean exactamente iguales en cada una de las posiciones de las cadenas. */

function validar_contrasenas(password1, password2){
    password1 = document.getElementById('campoContrasena'); //Obtengo el valor ingresado en el input
    console.log(password1.value);
	password2 = document.getElementById('campoConfirmarContrasena');
	console.log(password2.value);

/* 	if (password1.value == password2.value && password1.length == password2.length){
		console.log("Las contraseñas son iguales")
		console.log("Y Tienen la misma longitud")
		expresiones.password = true;
		console.log(expresiones.password);
		return true;
	} else {
		console.log("No Cumple")
		expresiones.password = false;
		console.log(expresiones.password);
		return false;
	} */

	if (password1.value.length == 0 || password2.value.length == 0){
		alert("Agregue una contraseña");
		return false;
	} else if (password1.value == password2.value && password1.value.length == password2.value.length){
		console.log("Las contraseñas son iguales")
		console.log("Y Tienen la misma longitud")
		expresiones.password = true;
		console.log(expresiones.password);
		return true;
	} else {
		console.log("No Cumple")
		expresiones.password = false;
		console.log(expresiones.password);
		return false;
	}

}

// module.exports.validar_nombre = validar_nombre;
// module.exports.validar_contrasenas = validar_contrasenas;