let email = document.querySelector(`input[name="email]`);
let contraseña=document.querySelector(`input [name="contra"]`);
let form = document.querySelector('form');


Form.addEventListener ("submit", function(event){
    if (email.value == ""){
        prompt("Por favor complete el campo");
        event.preventDefault (); // esto es para que no se mande el form si esta vacio //
    }
    if (contraseña.value == "") {
        prompt (" Por favor complete el camp");
        event.preventDefault();
    }

});