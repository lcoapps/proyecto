const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input') // se pone # para acceder al id

//Expresiones regulares para realizar las validaciones
const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{4,30}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const campos = {
    usuario: false,
    nombre: false,
	password: false,
	correo: false,
	telefono:false,
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

function validar_nombre (string) {
    if (expresiones.nombre.test(string)) {
        document.getElementById('grupo__nombre').classList.remove('formulario__grupo-incorrecto');
        document.getElementById('grupo__nombre').classList.add('formulario__grupo-correcto');
        document.querySelector('grupo__nombre i').classList.add('fa-check-circle');
        document.querySelector('grupo__nombre i').classList.remove('fa-times-circle');
        document.querySelector('grupo__nombre.formulario__input-error').classList.remove('formulario__input-error-activo');
        campos[nombre] = true; 
    } else {
        document.getElementById('grupo__nombre').classList.add('formulario__grupo-incorrecto');
        document.getElementById('grupo__nombre').classList.remove('formulario__grupo-correcto');
        document.querySelector('grupo__nombre i').classList.remove('fa-check-circle');
        document.querySelector('grupo__nombre i').classList.add('fa-times-circle');
        document.querySelector('grupo__nombre.formulario__input-error').classList.add('formulario__input-error-activo');
        campos[nombre] = false; 
    }
}

inputs.forEach((input)=>{
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);//par que al hacer click por fuera también me haga la comprobación
})

//Vamos a empezar que si envía el formulario vacío le genere error
formulario.addEventListener('submit', (e) => {
    e.preventDefault(); //no quiero que al dar enviar se manden

    const terminos = document.getElementById('terminos')
    //La primera parte del if es para que "envíe" el formulario
    if (campos.usuario && campos.nombre && campos.password && campos.correo && campos.telefono && terminos.checked){
        formulario.reset();

        document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
        setTimeout(()=>{
            document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
        },5000); //PAra que el mensaje se elimine luego de 5segundos
        document.querySelectorAll('.formulario__grupo-correcto'.forEach((icono)=>{
            icono.classList.remove('.formulario__grupo-correcto');
        }))
    } else { //esta parte es para que saque mensaje de error
        document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
    }

}) 
//en este caso cuando se presione enviar no queremos hacer nada, solo validar los campos y reiniciarlos para que queden vacíos