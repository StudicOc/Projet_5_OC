const params = new URLSearchParams(window.location.search);
// window.location nous renvoit à notre page actuelle
//objet = ajout de la propriété search
const id = params.get('id');
//console.log( window.location.search); Indique la position de la page en cours


const optionLenses = document.getElementById('optionLenses');
let title = document.querySelector('.card-title');
let description = document.querySelector('.card-text');
let price = document.querySelector('.card-price');
let img = document.querySelector('.card-img-top');
let addCart = document.querySelector('.add-card');


fetch(`http://localhost:3000/api/cameras/${id}`) //Passer le paramêtre dans l'url
  .then(response => response.json())

  .then(data => {
    console.log(data);

    title.innerText = data.name;
    description.innerText = data.description;
    price.innerText = data.price;
    img.src = data.imageUrl;


    for (let lense of data.lenses) {
      optionLenses.innerHTML += `<option value="${lense}">${lense}</option>`;
    }

    // -----------Construction de l'objet product avec les données de l'article---------------
    let product = {
      title: data.title,
      price: data.price,
      lense: optionLenses.value,
    }

    // Ajouter au panier
    addCart.addEventListener('click', () => {

      localStorage.setItem(data._id, JSON.stringify(product));
      document.querySelector('.cart span').textContent = localStorage.length;

      alert("Ajouté au panier");
    })

  })
  .catch(error => console.log(error))

