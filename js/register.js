const form = document.querySelector('.bro');
const emailTexto= document.querySelector('.email');
const contraTexto = document.querySelector('.contra');
let mensajeError= document.getElementById("mensaje-error");

form.addEventListener ('submit', function(event){
    event.preventDefault();
    if (email.value ==" "){
        mensajeError.textContent= "Por favor complete el campo email";    
    }else{
        mensajeError.textContent=" ";
    this.submit();
    }
    
    if(contraseña.value ==" "){
        mensajeError.textContent ="Por favor complete el campo email"; 
    }else{
        mensajeError.textContent=" ";
    this.submit();
    }
   
});  


