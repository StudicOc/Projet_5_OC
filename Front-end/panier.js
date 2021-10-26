
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
     <div class="text-center my-5">
     <p class="">Votre panier est vide</p>
     
     <a class="backHome fw-bold" href="index.html">Revenir à la liste </a>
     </div>
     
    `
}

//--------------- VALIDATION DU FORMULAIRE----------------//
//--IDENTIFICATION ET RECUPERATION DES INPUTS--//

const formContact = document.querySelector('#formContact');
let inputFirstname = document.querySelector('#firstName');
let inputLastname = document.querySelector('#lastName');
let inputEmail = document.querySelector('#email');
let inputAdress = document.querySelector('#address');
let inputZip = document.querySelector('#zip');
let inputCity = document.querySelector('#city');
let inputCountry = document.querySelector('#country');


//--- CREATION DES VARIABLES POUR LE CONTROLE DE FORMAT DES INPUT AVEC RegExp---//
const regexName = /^[a-zA-Z-\s]+$/;
const regexMail = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g');
const regexNumber = /^[0-9]{5}$/;
const regexAdress = /^[a-zA-Z0-9]{5,50}$/;


//--- 2-Test des inputs avec les régles de Regex + conditions ---//

formContact.addEventListener('submit', function (e) {
    e.preventDefault();

    //Test FIRSTNAME // 
    if (!regexName.test(inputFirstname.value)) {
        const errorFirst = document.querySelector('#firstName + span');
        errorFirst.innerHTML = "Indiquer un nom complet ou un nom composé";
    }

    //Test LASTNAME // 
    if (!regexName.test(inputLastname.value)) {
        const errorName = document.querySelector('#lastName + span');
        errorName.innerHTML = "Indiquer un nom complet ou un nom composé";
    }

    //Test EMAIL // 
    if (!regexMail.test(inputEmail.value)) {
        const errorMail = document.querySelector('#email + span');
        errorMail.innerHTML = "Indiquer une adresse mail valide";
    }
    // Test ADRESS //
    if (!regexAdress.test(inputAdress.value)) {
        const errorAdress = document.querySelector('#address + span');
        errorAdress.innerHTML = "Indiquer une adresse ";
    }
    // Test ZIP //
    if (!regexNumber.test(inputZip.value)) {
        const errorzip = document.querySelector('#zip + span');
        errorzip.innerHTML = "Indiquer un code postale avec des chiffres";
    }
    // Test CITY //
    if (!regexName.test(inputCity.value)) {
        const errorCity = document.querySelector('#city + span');
        errorCity.innerHTML = "Indiquer une ville ";
    }
    // Test COUNTRY //
    if (!regexName.test(inputCountry.value)) {
        const errorCountry = document.querySelector('#country + span');
        errorCountry.innerHTML = "Indiquer un pays ";
    }

    //--- Création  de l'objet contact du formualaire et l'envoyer sur le localStorage---//


    let contact = {
        'firstName': inputFirstname.value,
        'lastName': inputLastname.value,
        'email': inputEmail.value,
        'address': inputAdress.value,
        'zip': inputZip.value,
        'city': inputCity.value,
        'country': inputCountry.value
    }
    console.log(contact);
    localStorage.setItem("contact", JSON.stringify(contact));
});

// --------ENVOI DES DONNEES AU SERVEUR DU FORMULAIRE ET PANIER ------------- //

 //--- Méthode POST --- //



























