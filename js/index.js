let qs = location.search;
let qsObj = new URLSearchParams(qs);
let info = qsObj.get(`q`);
const URL = `https://dummyjson.com/recipes?limit=10&skip=0`
let formbusca = document.querySelector(".formbusca");
let search = document.querySelector(".search")
let ci = document.querySelector(".comidaindex");


fetch(URL)
    .then(function (response) {
        return response.json();
    })

    .then(function (data) {
        console.log(data);
        let comida = "";
        let recipes = data.recipes;

        for (let i = 0; i < recipes.length; i++) {
            comida +=
                `<article class= "articulorep">
                <img class= "fotorep" src= "${recipes[i].image}" alt=''> 
                <h1 class= "titulorep">${recipes[i].name} <h1> 
                <p class= "parraforep" >Difficulty: ${recipes[i].difficulty}</p>
                <a class="linkrep" href="./receta.html?id=${recipes[i].id}"> Detalle </a> 
            </article>`
        };
        ci.innerHTML = comida;

    })
    .catch(function (error) {
        return console.log(error);

    });

let btn = document.querySelector(".buscarmas");
let skip = 0



btn.addEventListener("click", function (event) {
    event.preventDefault();
    skip += 10
    const url = `https://dummyjson.com/recipes?limit=10&skip=${skip}&select=name,image`

    fetch(url)
        .then(function (response) {
            return response.json();
        })

        .then(function (data) {
            console.log(data);
            let comidas = "";
            let recipes = data.recipes;

            for (let i = 0; i < recipes.length; i++) {
                comidas +=
                    `<article class= "articulorep">
                    <img class= "fotorep" src= "${recipes[i].image}" alt=''> 
                    <h2 class= "titulorep">${recipes[i].name} <h2> 
                    <div class= ultimocambio>
                    <p class= "parraforep" >Difficulty: ${recipes[i].difficulty}</p>
                    <a class="linkrep" href="./receta.html?id=${recipes[i].id}"> Detalle </a>
                    </div>
                </article>`
            };
            ci.innerHTML += comidas;



        })
        .catch(function (error) {
            return console.log(error);

        });
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

