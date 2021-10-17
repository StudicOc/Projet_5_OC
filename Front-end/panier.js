
const positionelement = document.querySelector('#container-products-card');

if (localStorage.length > 0) {

    let productBody = document.querySelector('.productBody');
    let totalityPrice = document.querySelector('.totalityPrice');
    let priceTotal = 0;


    //------- Lecture, récupérer l'objet du stockage----
    for (let key in localStorage) {
        //-----getItem() - prend une clé et retourne la valeur correspondante---

        let product = JSON.parse(localStorage.getItem(key));
        //------Implémentation de chaques articles du localStorage dans les div (tableau) du DOM----
        if (product) {
            console.log(product);
            productBody.innerHTML += `
        <tr>
            <td>${product.title}</td>
            <td>${product.price}</td>
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















