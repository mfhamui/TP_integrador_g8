let email = document.querySelector(`.email`);
let contraseña=document.querySelector(`.contra`);
let form = document.querySelector('.bro');


formorm.addEventListener ("submit", function(event){
    event.preventDefault (); 
    if (email.value == ""){
        prompt("Por favor complete el campo");
        
    }
    if (contraseña.value == "") {
        prompt (" Por favor complete el campo");
        
    }
    else{ this.submit()}

});