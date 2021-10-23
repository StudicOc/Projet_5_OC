
//------RECUPERATION DU PANIER DU LOCALSTORAGE---------- //
const positionelement = document.querySelector('#container-products-card');

if (localStorage.length > 0) {

    let productBody = document.querySelector('.productBody');
    let totalityPrice = document.querySelector('.totalityPrice');
    let priceTotal = 0;

    //-------BOUCLE, AFFICHAGE DU CONTENU DU LOCALSTORAGE SUR LA PAGE PANIER----//

    for (let key in localStorage) {

        let product = JSON.parse(localStorage.getItem(key));
        document.querySelector('.cart span').textContent = localStorage.length;

        //---CONDITION SI DES ARTICLES SONT DANS LE LOCAL STORAGE---//
        // = ALIMENTER LE PANIER //
        if (product) {
            console.log(product);
            productBody.innerHTML += `
        <tr>
            <td>${product.title}</td>
            <td>${product.price}€</td>
            <td>${product.lense}</td>
        </tr> 
        `;

            priceTotal += product.price;
        }

    }

    totalityPrice.innerText = priceTotal;
} else {
    positionelement.innerHTML = `
     <div class="text-center">
     <p>Votre panier est vide</p>
     
     <a href="index.html">Revenir à la liste </a>
     </div>
     
    `
}

//------SUPRESSION D'UN PRODUIT ET DU PANIER -----//

//--------------- VALIDATION DU FORMULAIRE----------------//

//--IDENTIFICATION ET RECUPERATION DES INPUTS--//
const formContact = document.querySelector('#formContact');
let inputfirstname = document.querySelector('#firstName');
let inputlastname = document.querySelector('#lastName');
let inputemail = document.querySelector('#email');
let inputadress = document.querySelector('#adress');
let inputzip = document.querySelector('#zip');
let inputtcity = document.querySelector('#city');
let inputcountry = document.querySelector('#country');

//--- CREATION DES VARIABLES POUR LE CONTROLE DE FORMAT DES INPUT AVEC RegExp---//
const regexName = /^[a-zA-Z-\s]+$/;
const regexMail = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g');
const regexNumber = /^[0-9]{5}$/;
const regexAdress = /^[a-zA-Z0-9]{5,50}$/;


//----- 1-Ecouter la saisie des utilisateurs---//
//--- 2-Test des inputs avec les réfles de Regex + conditions ---//

formContact.addEventListener('submit', function (e) {
    e.preventDefault();

    //Test FIRSTNAME // 
    if (!regexName.test(inputfirstname.value)) {
        const myerror = document.querySelector('#firstName + span');
        myerror.innerHTML = "Indiquer un nom complet ou un nom composé";

    }

    //Test LASTNAME // 
    if (!regexName.test(inputlastname.value)) {
        const myerror = document.querySelector('#lastName + span');
        myerror.innerHTML = "Indiquer un nom complet ou un nom composé";
    }

    //Test EMAIL // 
    if (!regexMail.test(inputemail.value)) {
        const myerror = document.querySelector('#email + span');
        myerror.innerHTML = "Indiquer une adresse mail valide";
    }
    //Test ADRESS //
    if (!regexAdress.test(inputadress.value)) {
        const myerror = document.querySelector('#email + span');
        myerror.innerHTML = "Indiquer une adresse";
    }

    // Test CITY //
    if (!regexName.test(inputemail.value)) {
        const myerror = document.querySelector('#email + span');
        myerror.innerHTML = "Indiquer une ville, pas de chiffres autorisés";
    }
    // Test ZIP //
    if (!regexNumber.test(inputzip.value)) {
        const myerror = document.querySelector('#email + span');
        myerror.innerHTML = "Indiquer un code postal avec des chiffres";
    }

    //Test COUNTRY //
    if (!regexName.test(inputcountry.value)) {
        const myerror = document.querySelector('#email + span');
        myerror.innerHTML = "Indiquer un pays, pas de chiffres autorisés";
    }


});


//--- Création de l'objet contact---//

// --------ENVOI DES DONNEES AU SERVEUR DU FORMULAIRE ET PANIER ------------- //

























