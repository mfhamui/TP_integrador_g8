let form = document.querySelector('.bro');
let emailTexto = document.querySelector('.email');
let contraTexto = document.querySelector('.contra');
let mensajeError = document.querySelector("#mensaje-error");
let checkbox = document.querySelector('#t&c')

form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (emailTexto.value == "") {
        mensajeError.textContent = "Por favor complete el campo email";
    } else if (contra.value == "") {
        mensajeError.textContent = "Por favor complete el campo contraseña";
    } else {
        mensajeError.textContent = "";
        this.submit();
    }
    
});