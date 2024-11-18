let email = document.querySelector(`.email`);
let contraseña=document.querySelector(`.contra`);
let form = document.querySelector('.bro');

/*esto esta mal el prompt pide qeu llenes y la consigna no pide eso, esto dice la consigna: 
Validar el campo email. Si está vacío mostrar al usuario el texto en pantalla (no con alert) 
"Por favor complete el campo" y el formulario no se enviará.*/ 


form.addEventListener ("submit", function(event){
    event.preventDefault (); 
    if (email.value == ""){
        prompt("Por favor complete el campo");
        return;
        
    }
    if (contraseña.value == "") {
        prompt (" Por favor complete el campo");
        return;
    }
    else{ this.submit()}

});
