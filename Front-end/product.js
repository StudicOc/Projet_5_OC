

const params = new URLSearchParams(window.location.search);
const id = params.get('id');

//--PARCOURIR LE DOM--//
const optionLenses = document.getElementById('optionLenses');
let title = document.querySelector('.card-title');
let description = document.querySelector('.card-text');
let price = document.querySelector('.card-price');
let img = document.querySelector('.card-img-top');
let addCart = document.querySelector('.add-card');


fetch(`http://localhost:3000/api/cameras/${id}`)
  .then(response => response.json())

  .then(data => {
    console.log(data);

    title.innerText = data.name;
    description.innerText = data.description;
    price.innerText = data.price / 100;
    img.src = data.imageUrl;


    for (let lense of data.lenses) {
      optionLenses.innerHTML += `<option value="${lense}">${lense}</option>`;
    }


    let product = {
      title: data.name,
      price: data.price,
    }
    console.log(product);

    addCart.addEventListener('click', () => {

      localStorage.setItem(data._id, JSON.stringify(product));
      document.querySelector('.cart span').textContent = localStorage.length;

      alert("Ajouté au panier");


    })

  })
  .catch(error => console.log(error))

