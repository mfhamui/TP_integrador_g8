let email  = document.querySelector(`input[name="email"]`);
let Contraseña = document.querySelector(`input[name="contra"]`);

email.addEventListener("blur", function(){
        if (this.value =="") {
            alert ("Por favor complete el campo email")
        }
    });


Contraseña.addEventListener("blur",function(){
        if (this.value == "") {
            alert ("Por favor complete el campo contraseña")
        }
    });