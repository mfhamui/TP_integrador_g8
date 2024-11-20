let sr= document.querySelector(".search-results"); 
let qs= location.search;
let qsObj = new URLSearchParams(qs);
let info = qsObj.get(`buscador`);

const URL = `https://dummyjson.com/recipes/search?q=${info}`


fetch (URL)
.then(function (response) {
    return response.json();
})

.then(function (data) {
    console.log(data); 
    let character= "";
    let results= data.recipes; 

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
.catch(function (error) {
    return console.log(error);
    
});