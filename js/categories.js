let qs= location.search;
let qsObj = new URLSearchParams(qs);
let id = qsObj.get(`id`);
const URL = `https://dummyjson.com/recipes/tags`

let cat= document.querySelector(".categories"); 

fetch (URL)
.then(function (response) {
    return response.json();
})

.then(function (data) {
    console.log(data); 
    let categoria= "";
    

    for (let i = 0; i < data.length; i++) {
        let id = data[i];
        categoria +=
            `<article class="art">
                <a href="./category.html?id=${id}"> ${id} </a> 
            </article>`
    }; 
    cat.innerHTML = categoria;
   
})
.catch(function (error) {
    return console.log(error);
    
});