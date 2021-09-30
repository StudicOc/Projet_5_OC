


const params = new URLSearchParams(window.location.search); // window.location nous renvoit à notre page actuelle
//objet = ajout de la propriété search
const id = params.get('id');
//console.log(window.location.search); Indique la position de la page en cours
//console.log(params); 
//
const optionLenses = document.getElementById ('optionLenses');
let title = document.querySelector('.card-title');
let description = document.querySelector('.card-text');
let price = document.querySelector('.card-price');
let img = document.querySelector('.card-img-top');

fetch(`http://localhost:3000/api/cameras/${id}`) //Passer le paramêtre dans l'url
.then(response => response.json())

.then ( data => {
 console.log (data);

   title.innerText = data.name;
   description.innerText = data.description;
   price.innerText = data.price;
   img.src = data.imageUrl;

 
    for (let lense of data.lenses) {

        optionLenses.innerHTML += `<option value="${lense}">${lense}<option>  `; 
      
    }
  }

  );




  









  






  





  