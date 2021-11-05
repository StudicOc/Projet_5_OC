//----GESTION DE LA PAGE DE CONFIRMATION--//
//--- IMPLEMENTATION HTML DE L'AFFICHAGE CONFIRMATION DE COMMANDE---//
let cardConfirm = document.querySelector('#card-confirm');
let orderId = sessionStorage.getItem('orderId');
let Total = sessionStorage.getItem('Total');


if (orderId) {
  cardConfirm.innerHTML =
    `
<div class="container d-flex justify-content-center text-center my-5">
<div class="card border-success mb-3" style="max-width: 18rem;">
  <div class="card-header bg-transparent border-success">Commande validé</div>
  <div class="card-body text-success">
    <h5 class="card-title"><i class="fas fa-thumbs-up"></i></h5>
    <p class="card-text">Orinoco vous remercie pour votre commande n° ${orderId}.</p>
    <p>Pour une montant de ${Total}€</p>
    <p>Elle vous sera livré sous un délais de 5 jours ouvrés <i class="fas fa-truck-moving fa-2x"></i><p>
  </div>
  <div class="card-footer bg-transparent border-success">Orinoco</div>
</div>
</div>

`
    ;
}
else {

  window.location.assign("index.html");


}
localStorage.clear();
sessionStorage.clear();


