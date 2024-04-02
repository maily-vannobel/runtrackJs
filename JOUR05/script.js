// ------- INSCRIPTION ------- //

// Fonction qui vérifie critère MDP
function verificationMdp(motDePasse) {
    let longueurRegex = /.{8,}/; // Au moins 8 caractères
    let majusculeRegex = /[A-Z]/; // Au moins une majuscule
    let minusculeRegex = /[a-z]/; // Au moins une minuscule
    let caractereSpecialRegex = /[!@#$%^&*()_+\-={};':",.?]/; // Au moins un caractère spécial
    let chiffreRegex = /\d/; // Au moins un chiffre

    if (!longueurRegex.test(motDePasse)) {
        return { valide: false, message: "Le mot de passe doit contenir au moins 8 caractères." };
    }
    if (!majusculeRegex.test(motDePasse)) {
        return { valide: false, message: "Le mot de passe doit contenir des majuscules." };
    }
    if (!minusculeRegex.test(motDePasse)) {
        return { valide: false, message: "Le mot de passe doit contenir des minuscules." };
    }
    if (!caractereSpecialRegex.test(motDePasse)) {
        return { valide: false, message: "Le mot de passe doit contenir des caractères spéciaux." };
    }
    if (!chiffreRegex.test(motDePasse)) {
        return { valide: false, message: "Le mot de passe doit contenir au moins un chiffre." };
    }
    return { valide: true, message: "Mot de passe valide." };
}

// Sélectionne le champ de mot de passe par son ID "mdp".
let inputMotDePasse = document.getElementById("mdp");

// Écouter l'événement de saisie sur le champ de mot de passe
inputMotDePasse.addEventListener("input", function() {
    // Récupérer la valeur du champ de mot de passe
    let motDePasse = inputMotDePasse.value;

    // Vérifier la validité du mot de passe
    let resultatVerification = verificationMdp(motDePasse);

    // Récupérer l'élément pour afficher le message d'erreur
    let messageErreur = document.getElementById("message1");

    // Afficher ou masquer le message d'erreur en fonction du résultat de la vérification
    if (!resultatVerification.valide) {
        messageErreur.textContent = resultatVerification.message;
        messageErreur.style.display = "block";
    } else {
        // Masquer le message d'erreur
        messageErreur.textContent = "";
        messageErreur.style.display = "none";
    }
});


// variable qui stocke champ de confirmationMDP
let inputConfirmationMotDePasse = document.getElementById("mdpVerif");

// Écouter l'événement de saisie sur le champ de confirmation du mot de passe
inputConfirmationMotDePasse.addEventListener("input", function() {
    // recup contenu du champ de confirm
    let confirmationMotDePasse = inputConfirmationMotDePasse.value;
    let motDePasse = document.getElementById("mdp").value;

    let messageErreur = document.getElementById("message2");

    // verif si 2 MDP identiques
    if (motDePasse !== confirmationMotDePasse) {
        messageErreur.textContent = "Les mots de passe ne correspondent pas.";
        messageErreur.style.display = "block";
    } else {
        // Masquer le message d'erreur si les mots de passe correspondent
        messageErreur.textContent = "";
        messageErreur.style.display = "none";
    }
});

//ADRESSE MAIL

// Récupchamp de saisie du mail
let inputEmail = document.getElementById("mail");

let messageErreur = document.getElementById("message3");
 
// Fonction verif format mail
function validerMail(email) {
    // Expression régulière pour valider l'adresse e-mail
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

  inputEmail.addEventListener("input", function() {
    // Récupérer la valeur saisie dans le champ de saisie de l'adresse e-mail
    let email = inputEmail.value;
        
    // si c'est pas bon msg d'erreur 
    if (!validerMail(email)) {
        messageErreur.textContent = "Adresse e-mail invalide.";
        messageErreur.style.display = "block";
    } else {
        messageErreur.textContent = "";
        messageErreur.style.display = "none";
    }
});

  // VARIABLES QUI RECUP TTE LES VALEURS DES CHAMPS DU FORM
   let nom = document.getElementById("nom").value;
   let prenom = document.getElementById("prenom").value;
   let email = document.getElementById("mail").value;
   let adresse = document.getElementById("adresse").value;
   let codePostal = document.getElementById("codePostal").value;
   let id = document.getElementById("id").value;
   let motDePasse = document.getElementById("mdp").value;
   let confirmationMotDePasse = document.getElementById("mdpVerif").value;

// SELECTIONNER BOUTON VALIDER
let valider = document.getElementById("valider")
// LUI AJOUTER EVNMT CLIC
  valider.addEventListener("click", function() {

 let champsRemplis = true;
 //'champs' =var qui stock tous les champ(input)
 const champs = document.querySelectorAll("input");
 
 //si champRempli=FAUX (pas rempli)stop
 for (let champ of champs) {
   if (champ.value === "") {
     champsRemplis = false;
     break;
   }
 }

 // donc afficher msg d'erreur 
 if (!champsRemplis) {
   const messageErreur = document.getElementById("message3");
   messageErreur.textContent = "Tous les champs doivent être remplis.";
   messageErreur.style.display = "block";
 }
 //sinin ouvrir connexion
 if (champsRemplis) {
 window.location.href = "connexion.html";
}


});