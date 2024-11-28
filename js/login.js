let formu = document.querySelector(".formula");
let email  = document.querySelector(".email");
let contraseña = document.querySelector(".contra");
let formbusca = document.querySelector(".formbusca");
let search = document.querySelector(".search")
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



formbusca.addEventListener('submit', function (event) {
    event.preventDefault();
    const searchTerm = search.value;

    if (searchTerm === '') {
        alert(' ERROR Por favor, ingresa un término de búsqueda.');
        return;
    }

    if (searchTerm.length < 3) {
        alert('ERROR, El término de búsqueda debe tener al menos 3 caracteres.');
        return;
    }

    else { this.submit() }
});
