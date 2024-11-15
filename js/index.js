let qs= location.search;
let qsObj = new URLSearchParams(qs);
let info = qsObj.get(`q`);
const URL = `https://dummyjson.com/recipes?limit=10&skip=0&select=name,image`

let sr= document.querySelector(".search-results"); 


fetch (URL)
.then(function (response) {
    return response.json();
})

.then(function (data) {
    console.log(data); 
    let character= "";
    let results= data.results; 

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