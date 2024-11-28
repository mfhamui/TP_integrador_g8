let cate= document.querySelector(".category");
let qs= location.search
let qsObj = new URLSearchParams(qs);
let id = qsObj.get(`id`);
let formbusca = document.querySelector(".formbusca");
let search = document.querySelector(".search")
const URL = `https://dummyjson.com/recipes/tag/${id}`; 
let titulo = document.querySelector(".nombredos")


fetch (URL)
.then(function (response) {
    return response.json();
})

.then(function (data) {
    console.log(data); 
    let comidas= "";
    let recipes= data.recipes; 
    titulo.innerText= `${id}`
    for (let i = 0; i < recipes.length; i++) {
        comidas +=
            `<article class="recetados">
                <img class= "image" src= "${recipes[i].image}" alt=''>  
                <h1 class= "titulorep">${recipes[i].name} </h1> 
                <p class= "parraforepdos" >Difficulty: ${recipes[i].difficulty}</p>
                <a class="linkrepdos" href="./receta.html?id=${recipes[i].id}"> Detalle </a>
            </article>`
    }; 
    cate.innerHTML += comidas
   
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


