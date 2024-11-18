let email = document.querySelector(`.email`);
let contraseña=document.querySelector(`.contra`);
let form = document.querySelector('.bro');


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