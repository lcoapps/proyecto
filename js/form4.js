const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input') // se pone # para acceder al id

//Expresiones regulares para realizar las validaciones
const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,30}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

//VALIDACIÓN DE CAMPO NOMBRE

/* Debe cumplir con las siguientes condiciones:
• Debe tener una longitud mayor a 4
• Debe tener una longitud máxima de 30 caracteres
• No puede tener ningún carácter especial como: ‘@’, ‘!’,’_’,’
• No debe contener ningún número */

const validarFormulario = (e) => {
    switch(e.target.name){ //según el name del input quiero que me haga cosas diferentes, con Shift+Alt+flecha abajo duplico
        case "usuario":
            validarCampo(expresiones.usuario, e.target, 'usuario');
        break;
        case "nombre":
            validar_nombre(e.target);
        break;
        case "password":
            validarCampo(expresiones.password, e.target, 'password');
            validarPassword2();
        break;
        case "password2":
            validarPassword2();
        break;
        case "correo":
            validarCampo(expresiones.correo, e.target, 'correo');
        break;
        case "telefono":
            validarCampo(expresiones.telefono, e.target, 'telefono');
        break;
    }
}

function validar_nombre(string){
	if (string>=4 && string <=16){

	}
}

module.exports.validar_nombre = validar_nombre