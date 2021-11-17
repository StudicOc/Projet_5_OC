
//--PARCOURIR LE DOM--//
const optionLenses = document.getElementById('optionLenses');
let title = document.querySelector('.card-title');
let description = document.querySelector('.card-text');
let price = document.querySelector('.card-price');
let img = document.querySelector('.card-img-top');
let addCart = document.querySelector('.add-card');

//----CONSTRUICTION DE LA NOUVELLE URL-------//
const params = new URLSearchParams(window.location.search);
//---Retournera la première valeur associée au paramètre de recherche donné "id"--//
const id = params.get('id');

//---REQUETE HTTP VERS L'API*** AVEC LA METHODE GET----//

fetch(`http://localhost:3000/api/cameras/${id}`) //--Affichage du produit séléctionné par son ID--//
  .then(response => response.json())

  .then(data => {
    console.log(data);
    //---Mise en relation des data dans le dom pour afficher le produit sélectionné--//
    title.innerText = data.name;
    description.innerText = data.description;
    price.innerText = data.price / 100 + "€";
    img.src = data.imageUrl;

    //----Création du html pour insérer les options du produit---//
    for (let lense of data.lenses) {
      optionLenses.innerHTML += `<option value="${lense}">${lense}</option>`;
    }

    //--Création de l'objet produit pour envoyer les value dans le LocalStorage---//
    let product = {
      title: data.name,
      price: data.price / 100,
    }
    console.log(product); //---Vérification si l'objet a bien été créé--//




    //--ECOUTEUR D'EVENEMENT ET ENVOIE AU LOCASTORAGE---//

    function sendProductLocalStorage() {
      addCart.addEventListener('click', () => {
        localStorage.setItem(data._id, JSON.stringify(product));
        //--- Au click envoit sur le menu le nombres d'article--//
        document.querySelector('.cart span').textContent = localStorage.length;

        alert("Ajouté au panier");
      })
    }
    sendProductLocalStorage();
    //--exécute la fonction--//

  })




  .catch(error => console.log(error))

