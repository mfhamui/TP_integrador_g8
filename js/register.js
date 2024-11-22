let form = document.querySelector('.bro');
let emailTexto= document.querySelector('.email');
let contraTexto = document.querySelector('.contra');
let mensajeError= document.querySelector("#mensaje-error");

form.addEventListener ('submit', function(event) {
    event.preventDefault();
    if (email.value ==""){
        mensajeError.textContent= "Por favor complete el campo email";    
    }else{
        if(contraseña.value ==""){
            mensajeError.textContent ="Por favor complete el campo contraseña"; 
        }else{
            mensajeError.textContent="";
            this.submit();
        }
    }
});

