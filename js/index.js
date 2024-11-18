let qs= location.search;
let qsObj = new URLSearchParams(qs);
let info = qsObj.get(`q`);
const URL = `https://dummyjson.com/recipes?limit=10&skip=0`

let ci= document.querySelector(".comidaindex"); 


fetch (URL)
.then(function (response) {
    return response.json();
})

.then(function (data) {
    console.log(data); 
    let comida= "";
    let recipes= data.recipes; 

    for (let i = 0; i < recipes.length; i++) {
        comida += 
            `<article class= "articulorep">
                <img class= "fotorep" src= "${recipes[i].image}" alt=''> 
                <h1 class= "titulorep">${recipes[i].name} <h1> 
                <p class= "parraforep" >Nivel de dificultad: ${recipes[i].id}</p>
                <a class="linkrep" href="./receta.html?id=${recipes[i].id}"> Detalle </a> 
            </article>`
    }; 
    ci.innerHTML = comida;
   
})
.catch(function (error) {
    return console.log(error);
    
});