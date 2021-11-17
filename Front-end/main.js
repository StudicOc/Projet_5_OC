//----GESTION DE L'AFFICHAGE DES ELEMENTS DE L'API DANS LE DOM---//

const productList = document.getElementById("productList");

//---RECUPERATION DES DONNEES DE L'API---//
//---Requête HTTP avec la méthode GET--//

fetch('http://localhost:3000/api/cameras/')
  .then(response => response.json()) //---Récupération de la reponse au format json ---//

  .then(data => {

    for (let product of data) {//---Itération pour afficher les données de l'API---//

      console.log(product);
      //Création de la du code html pour afficher les produits---//
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
                  </div>
                </a>
            
            </div>
          </div>
        </article>



`;

    }
    //---Panier static aprés un changement de page----//
    function displayItemReloading() {
      document.querySelector('.cart span').textContent = localStorage.length;
    }
    displayItemReloading();
  }

    //-- mettre le catch--//

  );