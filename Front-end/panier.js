//-----GESTION DU PANIER----//

//---RECUPERATION DES ELEMENTS DU DOM---//
let positionElement = document.querySelector("#container-products-card");
let cartTablebody = document.querySelector("#cart-tablebody");
let totalityPrice = document.querySelector(".subtotal");
let products = [];
let Total = 0;

if (localStorage.length > 0) {
  //---RECUPERATION DU PANIER DANS LE LOCAL STORAGE---//

  function displayProduct() {
    for (let key in localStorage) {
      //---Conversion des données au format json du localStorage en objet JS--//
      let product = JSON.parse(localStorage.getItem(key));
      document.querySelector(".cart span").textContent = products.length;

      if (product) {
        console.log(product);
        products.push(key);
        cartTablebody.innerHTML += `

        <tr>
            <td>${product.title}</td>
            <td>${product.price}€</td>
        </tr> 

`;
        //---Calcule du total---//
        Total += product.price;
      } //--Fin de la boucle for__//
    } //--Fin de la condition "if"--//
  } //--Fin de balise de la fonction--//
  displayProduct();

  //---Affichage du prix total---//
  function calculatePrice() {
    totalityPrice.innerText = Total;
    console.log(Total);
    sessionStorage.setItem("Total", JSON.stringify(Total));
  }
  calculatePrice();
} else {
  positionElement.innerHTML = `



    <div class="container padddingEmptycard">

        <div class=" text-center">
            <h4 class="h5 fw-bold py-3">Votre panier est vide</h4>
            <div class="border-p">
                <p>Remplissez-le avec notre gamme</p>
            </div>
            <div class=" my-5">
                <a href="/Front-end/index.html" class="borderCard text-white">
                    <span>Continuez mes achats</span>
                </a>
            </div>
        </div>
    </div>

`;
}
//-------VALIDATION DU FORMUALIRE--------- //
//--IDENTIFICATION ET RECUPERATION DES VALEURS INPUTS--//
const formEl = document.getElementById("formContact");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const address = document.getElementById("address");
const city = document.getElementById("city");
const submitEl = document.getElementById("submitButton");

//---REGEX---//

const regexName = /^[a-zA-Z-\s]+$/;
const regexMail = new RegExp(
  "^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$"
);
const regexAdress = /^(([a-zA-ZÀ-ÿ0-9]+[\s\-]{1}[a-zA-ZÀ-ÿ0-9]+)){1,20}$/;

//---Variables pour afficher une alerte pour l'utilisateur en cas de mauvaises saisies---//
let error = true;
const borderSuccess = " #7EEA5E solid 2px";
const borderError = "red solid 2px";

function validRegex() {
  document.querySelector("#formContact").addEventListener("input", (e) => {
    e.preventDefault();

    switch (
      e.target.id //---Vérification personnalisée de chaque input--//
    ) {
      //TEST FIRSTNAME //
      case "firstName":
        if (regexName.test(firstName.value)) {
          error = false;
          e.target.style.border = borderSuccess;
        } else {
          error = true;
          e.target.style.border = borderError;
        }
        break;
      // TEST LASTNAME //
      case "lastName":
        if (regexName.test(lastName.value)) {
          error = false;
          e.target.style.border = borderSuccess;
        } else {
          error = true;
          e.target.style.border = borderError;
        }
        break;
      // TEST EMAIL //
      case "email":
        if (regexMail.test(email.value)) {
          //---Format mail accepté--//
          error = false;
          e.target.style.border = borderSuccess;
        } else {
          error = true;
          e.target.style.border = borderError;
        }
        break;
      // TEST ADDRESS //
      case "address":
        if (regexAdress.test(address.value)) {
          error = false;
          e.target.style.border = borderSuccess;
        } else {
          error = true;
          e.target.style.border = borderError;
        }
        break;
      // TEST CITY //
      case "city":
        if (regexName.test(city.value)) {
          error = false;
          e.target.style.border = borderSuccess;
        } else {
          error = true;
          e.target.style.border = borderError;
        }
        break;
    }
  });
}
validRegex();

formEl.onsubmit = (e) => {
  //---Vérification lors de l'envoit du formulaire--//
  e.preventDefault();

  if (error) {
    alert("Veuillez remplir correctement le formulaire !");
    return;
  } else {
    //---Si aucune erreur detecté = CREATION DE L'OBJET CONTACT---//
    let contact = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      address: address.value,
      city: city.value,
    };

    console.log(contact); //---Vérification si l'objet contact est bien crée--//

    fetch("http://localhost:3000/api/cameras/order", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ products, contact }),
    })
      .then((response) => response.json())
      //--- Vérification 200  si la requête a réussi et qu'une ressource a été créée---//
      .then(function (res) {
        // Enregistrement orderId dans sessionStorage//
        sessionStorage.setItem("orderId", res.orderId);
        window.location.assign("confirmation.html?orderId=" + res.orderId);
        //sessionStorage.clear();
      });
  }
};
