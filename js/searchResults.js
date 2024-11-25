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
                        <h1 class= "titulorep">${results[i].name} </h1> 
                        <p class= "parraforepdos" >Difficulty: ${results[i].difficulty}</p>
                        <a class="linkrepdos" href="./receta.html?id=${results[i].id}"> Detalle </a>
                    </article>`
        };

        sr.innerHTML = character;

    })
    
    .catch (function (error) {
    return console.log(error);

});

if (info) {
    fetchRecipes(info);
}

// Escucha el evento de entrada en el campo de búsqueda
search.addEventListener('input', function (event) {
    let valor = search.value; // Obtiene el valor actual del campo de búsqueda
    if (valor.trim() === "") {
        sr.innerText = `Error: Por favor ingresa un término de búsqueda.`;
        return; // Salimos si no hay valor
    } else {
        sr.innerText = ""; // Limpia el mensaje de error
    }

    // Realiza la búsqueda con el nuevo valor
    fetchRecipes(valor);
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

        else{ this.submit()}
    });  

