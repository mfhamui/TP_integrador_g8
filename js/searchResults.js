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
    let results= data.recipies; 

    for (let i = 0; i < results.length; i++) {
        character += 
            `<article>
                <img src= "${results[i].image}" alt=''>
                <a href="./detalle.html?id=${results[i].id}">  
                <p>Name:${results[i].name} </p> </a> 
                <p>Status: ${results[i].status}</p>
            </article>`
    };
    sr.innerHTML = character;
   
})
.catch(function (error) {
    return console.log(error);
    
});