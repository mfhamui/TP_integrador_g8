let email  = document.querySelector(".email");
let contraseña = document.querySelector(".contra");
let formu = document.querySelector(".bro");

formu.addEventListener('submit', function (event) {
    event.preventDefault();
    if (email.value == "") {
        alert("Por favor complete el campo email");
        return;
    }
     
    if (contraseña.value == "") {
            alert("Por favor complete el campo contraseña");
            return;
    }

    else{ this.submit()}
    

});
