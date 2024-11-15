const URL = `https://dummyjson.com/recipes?limit=10&skip=10&select=name,image`


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