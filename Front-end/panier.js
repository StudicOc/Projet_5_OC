
//Réaliser le compteur de clics
// Lire et enrengistrer la valeur de l'élement option
 //1 = création d'une variable + querySelector(page html)
 //2 = add EvenListener 'click' = inserer dans une fonction


document.addEventListener('DOM', function() {
document.querySelector('select [name ="lenses"]').onechange=changeEventHandler;
}, false);
  
function changeEventHandler(event) {
    if (!event.targuet.value) alert('Ajouter vos lentilles');
  else alert('Ajout de' + event.target.value +'lenses');
}