/* Identification des fonctions à coder
document.getElementById() 
inner.html 
/* Joindre l'API */
/*Paramètres des API=GET*/

const productList = document.getElementById("productList");
fetch('http://localhost:3000/api/cameras/') //Afficher les objets sur la page web
  .then(response => response.json())
  .then(data => {

    for (let product of data) { /* Affichage des donneés par une boucle */
      console.log(product);
      productList.innerHTML += `
      
        <div class="row d-flex justify-content-center my-5">
        <div class="col-sm-6">
        <a href="./produit.html?id=${product._id}">
        <div class="card shadow">
        <img class="card-img-top"src='${product.imageUrl}' alt='' /> 
        <div class="card-body">
        <h2 class="card-title">${product.name}</h2>
        <p class="card-text">${product.price}€</p>
        </div>
        </a>
        </div>
        </div>
        </div>
      
      `;

    }
  }



  );