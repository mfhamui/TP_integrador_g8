let qs= location.search
let qsObj = new URLSearchParams(qs);
let id = qsObj.get(`id`);

const URL = `'https://dummyjson.com/recipes/tag/${id}`;


let cate= document.querySelector(".category"); 


fetch (URL)
.then(function (response) {
    return response.json();
})

.then(function (data) {
    console.log(data); 
    let comidas= "";
    let reci= data.recipes; 

    for (let i = 0; i < recipes.length; i++) {
        comidas += 
            `<article >
                <a  href="./receta.html?id=${recipes[i].id}"> ${recipes[i].name} </a> 
            </article>`
    }; 
    cate.innerHTML = comidas;
   
})
.catch(function (error) {
    return console.log(error);
    
});