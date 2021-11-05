//---- GESTION DE L'AFFICHE DES ELEMENTS DE L'API DANS LE DOM---//

const productList = document.getElementById("productList");
//---RECUPERATION DES DONNEES DE L'API---//
fetch('http://localhost:3000/api/cameras/')
  .then(response => response.json())
  .then(data => {

    for (let product of data) {
      console.log(product);
      productList.innerHTML += `
       <article>
          <div class="container d-flex justify-content-center my-3 py-3 ">
        <div class=" col col-lg-4">
        <a href="./produit.html?id=${product._id}">
        <div class="card shadow">
        <img class="card-img-top"src='${product.imageUrl}' alt='' /> 
        <div class="card-body">
        <h2 class="card-title">${product.name}</h2>
        <p class="card-text">${product.price / 100}€</p>
        </div>
        </a>
        </div>
        </div>
        </div>
        </article>
        
       
      
      `;


    }
    //---Transfert du panier-changement de page--//

    document.querySelector('.cart span').textContent = localStorage.length;

  }



  );