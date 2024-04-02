let update = document.getElementById("majUtilisateurs")
update.addEventListener("click",function() {

    //charger json
    fetch('utilisateur.json')
    .then(response => response.json())
    .then(data => {

    //selectionner tableau
    let tbody= document.getElementById("donneesUtilisateurs")
    // Effacer le contenu actuel du tableau
    tbody.innerHTML = '';

    // Parcourir données des utilisateurs et les ajouter au tableau
        data.forEach(function(user) {
                let row = tbody.insertRow(); //ajoute une nvl tr (ligne)
                row.insertCell(0).textContent = user.id;
                row.insertCell(1).textContent = user.nom;
                row.insertCell(2).textContent = user.prenom;
                row.insertCell(3).textContent = user.email; });

});

})