//variable qui stocke nb de clic
let compte = 0; 


function addOne() {
    compte++; //incrémenter compteur
    document.getElementById("compteur").textContent = compte;
//selectionner le contenu du texte du p avec l'id compteur
//lui appliquer la var compte qui rajoute 1(MAJdu compteur)
}


//selectionner le bouton, lui attribuer evnm clic de la fonction addOne
document.getElementById("button").addEventListener("click", addOne);
