document.getElementById('button').addEventListener('click', function() {
   fetch("expression.txt")     // retourne promesse qui représente la reqête reseau pour recup contenu de expression.txt
       .then(response => { // méthode THEN enchainée à cette promesse
           if (!response.ok) {
               throw new Error("La réponse n'est pas bonne");
           }
           return response.text();
       })
       .then(data => {
           document.getElementById('expression').textContent = data;
       })
       .catch(error => {
           console.error("Problème avec l'opération fetch", error);
       });
});
