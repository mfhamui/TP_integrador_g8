let form = document.querySelector('.bro');
let emailTexto = document.querySelector('.email');
let contraTexto = document.querySelector('.contra');
let mensajeError = document.querySelector("#mensaje-error");
let checkbox = document.querySelector("#check");

form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (emailTexto.value == "") {
        mensajeError.textContent = "Por favor complete el campo email";
        return;
    } 
    if (contraTexto.value == "") {
        mensajeError.textContent = "Por favor complete el campo contraseña";
        return;
    }
    if (checkbox.checked== false){
         mensajeError.textContent="acepte terminos y condiciones";
        return;
    }
    mensajeError.textContent="";
    form.submit();
});