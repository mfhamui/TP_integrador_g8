let qs= location.search;
let qsObj = new URLSearchParams(qs);
let info = qsObj.get(`q`);
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
        categoria += 
            `<article class="art">
                <a href="./category.html?id=${data[i]}"> ${data[i]} </a> 
            </article>`
    }; 
    cat.innerHTML = categoria;
   
})
.catch(function (error) {
    return console.log(error);
    
});