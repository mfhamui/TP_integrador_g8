let form = document.querySelector('.bro');
let emailTexto = document.querySelector('.email');
let contraTexto = document.querySelector('.contra');
let mensajeError = document.querySelector("#mensaje-error");
let checkbox = document.querySelector("#check");
let formbusca = document.querySelector(".formbusca");
let search = document.querySelector(".search")
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



formbusca.addEventListener('submit', function (event) {
    event.preventDefault();
    const searchTerm = search.value;

    if (searchTerm === '') {
        alert(' ERROR Por favor, ingresa un término de búsqueda.');
        return;
    }

    if (searchTerm.length < 3) {
        alert('ERROR, El término de búsqueda debe tener al menos 3 caracteres.');
        return;
    }

    else { this.submit() }
});
