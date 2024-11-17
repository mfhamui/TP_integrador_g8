let email  = document.querySelector(`input[name="email"]`);
let Contraseña = document.querySelector(`input[name="contra"]`);

email.addEventListener("submit", function(){
        if (this.value =="") {
            alert ("Por favor complete el campo email")
        }
    });


Contraseña.addEventListener("submit",function(){
        if (this.value == "") {
            alert ("Por favor complete el campo contraseña")
        }
    });
    