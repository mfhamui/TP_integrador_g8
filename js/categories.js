let qs= location.search;
let qsObj = new URLSearchParams(qs);
let id = qsObj.get(`id`);
let formbusca = document.querySelector(".formbusca");
const URL = `https://dummyjson.com/recipes/tags`
let search = document.querySelector(".search")
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
