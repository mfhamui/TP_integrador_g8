let sr = document.querySelector(".search-results");
let qs = location.search;
let qsObj = new URLSearchParams(qs);
let info = qsObj.get(`buscador`);
let formbusca = document.querySelector(".formbusca");
let search = document.querySelector(".search")

const URL = `https://dummyjson.com/recipes/search?q=${info}`
let titulo = document.querySelector(".nombredos");

fetch(URL)
    .then(function (response) {
        return response.json();
    })

    .then(function (data) {
        console.log(data);
        let character = "";
        let results = data.recipes;
        titulo.innerText = `Resultados de búsqueda para: ${info}`;
        for (let i = 0; i < results.length; i++) {
            character +=
                `<article class="recetados">
                        <img class= "image" src= "${results[i].image}" alt=''>  
                        <h2 class= "titulorep">${results[i].name} </h2> 
                        <a class="linkrepdos" href="./receta.html?id=${results[i].id}"> Detalle </a>
                    </article>`
        };

        sr.innerHTML = character;

        if (results.length == 0){
            
            sr.innerHTML = "No hay coincidencias";
            sr.style.fontSize= "30px";
            sr.style.color= "white";
            sr.style.margin= "10px";
        };

    })

    .catch(function (error) {
        return console.log(error);

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



