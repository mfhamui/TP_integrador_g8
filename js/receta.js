let qs= location.search
let qsObj = new URLSearchParams(qs);
let id = qsObj.get(`id`);

const URL = `https://dummyjson.com/recipes/${id}`;

let nom= document.querySelector(".nombre")

let int= document.querySelector(".instrucciones")
let coccion= document.querySelector(".coccion")
let img = document.querySelector(".imagereceta")
let tag = document.querySelector(".tag")


 
   


fetch (URL)
.then(function (response) {
    return response.json();
})

.then(function (data) {
    console.log(data); 
    nom.innerText= data.name
    int.innerText= `Instructions: ${data.instructions}`
    coccion.innerText= `Cooking time: ${data.cookTimeMinutes} minutes`

    comida= ""
    let h= data.tags 
    for (let i = 0; i < h.length; i++) {
        comida += 
            `<li class="tagdos"><a href="./category.html?id=${h[i]}"> ${h[i]} </a></li>`
    }; 
    tag.innerHTML = comida;
  
    img.src= data.image;

})
.catch(function (error) {
    return console.log(error);
    
});
