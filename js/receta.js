let qs= location.search
let qsObj = new URLSearchParams(qs);
let id = qsObj.get(`id`);

const URL = `https://dummyjson.com/recipes/${id}`;

let nom= document.querySelector(".nombre")
let ingre= document.querySelector(".ingredientes")
let int= document.querySelector(".instrucciones")
let prep= document.querySelector(".preparacion")
let coccion= document.querySelector(".coccion")
let servir= document.querySelector(".servir")
let dificultad= document.querySelector(".dificultad")
let cocina= document.querySelector(".cocina")
let calorias= document.querySelector(".calorias")
let rate= document.querySelector(".rate")
let review= document.querySelector(".review")
let tipo= document.querySelector(".tipo")
let img = document.querySelector(".image")
let tag = document.querySelector(".tag")

 
   


fetch (URL)
.then(function (response) {
    return response.json();
})

.then(function (data) {
    console.log(data); 
    nom.innerText= data.name
    int.innerText= `Instructions: ${data.instructions}`
    ingre.innerText= `Ingredients: ${data.ingredients}`
    prep.innerText= `Preparation time: ${data.prepTimeMinutes} minutes`
    coccion.innerText= `Cooking time: ${data.cookTimeMinutes} minutes`
    servir.innerText = `Servings: ${data.servings}`;
    dificultad.innerText = `Difficulty: ${data.difficulty}`;
    cocina.innerText = `Type of cuisine: ${data.cuisine }`;
    calorias.innerText = `Calories: ${data.caloriesPerServing }`;
    rate.innerText = `Calification: ${data.rating}`;
    review.innerText = `Reviews: ${data.reviewCount}`;
    tipo.innerText = `type of meal: ${data.mealType}`;
    tag.innerText= `tags: ${data.tags}`
    img.src= data.image;

})
.catch(function (error) {
    return console.log(error);
    
});