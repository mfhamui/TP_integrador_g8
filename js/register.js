const form = document.querySelector('.bro');
const emailTexto= document.querySelector('.email');
const contraTexto = document.querySelector('.contra');


form.addEventListener ('submit', function(event){
    event.preventDefault();
    if (email.value ==" "){
        confirm("Por favor complete el campo")
        console.log("email vacio");
        return;
    }
    if (contraseña.value.trim() === " "){
        confirm ("Por favor complete el campo")
        console.log("contrasena vacio");
        return;
    }
    console.log("estan vacios los campos,completelos ")
    this.submit ();
});  


