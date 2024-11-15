let qs= location.search;
let qsObj = new URLSearchParams(qs);
let info = qsObj.get(`q`);
const URL = `https://dummyjson.com/recipes?limit=10&skip=0&select=name,image`

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
            `<article>
                <img src= "${recipes[i].image}" alt=''>
                <a href="./detalle.html?id=${recipes[i].id}">  
                <p>Name:${recipes[i].name} </p> </a> 
                <p>Status: ${recipes[i].status}</p>
            </article>`
    };
    ci.innerHTML = comida;
   
})
.catch(function (error) {
    return console.log(error);
    
});