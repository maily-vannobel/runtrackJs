// FONCTION POUR VÉRIFIER LA SÉCURITÉ DU MOT DE PASSE
function checkPassword () {
    // Sélection de l'input dans le HTML
    let mdpInput = document.getElementById('mdp');
    // Sélection élément pour afficher le message d'erreur
    let passwordError = document.getElementById('passwordError');

    // ajout événement pour écouter les saisies dans le champ de mot de passe
    mdpInput.addEventListener('input', function() {
        let password = mdpInput.value;

    if (password.length < 6) {
        // Affichage du message d'erreur
        passwordError.textContent = 'Le mot de passe doit avoir au moins 6 caractères.';
    } else if (!/\d/.test(password)) {
        // Vérification de la présence d'au moins un chiffre
        passwordError.textContent = 'Le mot de passe doit avoir au moins un chiffre.'    
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        // Vérification de la présence d'au moins un caractère spécial
        passwordError.textContent = 'Le mot de passe doit inclure au moins un caractère spécial.';
    } else if (!/[A-Z]/.test(password)) {
        // Vérification de la présence d'au moins une lettre majuscule
        passwordError.textContent = 'Le mot de passe doit avoir au moins une majuscule.';
    
    } else {
        passwordError.textContent = '';

        // COMPARER LES 2 MDP 
        let mdpConfirmInput = document.getElementById('mdpConfirm');
        let passwordConfirmError = document.getElementById('passwordConfirmError');

        mdpInput.addEventListener('input', function() {
            if (mdpConfirmInput.value !== '') {
              if (password !== mdpConfirmInput.value) {
                passwordConfirmError.textContent = 'Les mots de passe ne correspondent pas.';
              } else {
                passwordConfirmError.textContent = '';
              }
            }
          });
    
          mdpConfirmInput.addEventListener('input', function() {
            if (password !== mdpConfirmInput.value) {
              passwordConfirmError.textContent = 'Les mots de passe ne correspondent pas.';
            } else {
              passwordConfirmError.textContent = '';
            }
          });
        }
      });
    }

//FONCTION VERIFIER FORMAT MAIL
function checkEmail () {
const mailInput = document.getElementById("mail")
let mailError = document.getElementById('mailError');

// ajout événement pour écouter les saisies dans le champ de mot de passe
mailInput.addEventListener('input', function() {
    let mail = mailInput.value;

const mailFormat = /^[a-zA-Z0-9._%+-]+@laplateforme.io$/;

    if (!mailFormat.test(mail)) {
        // Affichage du message d'erreur si le format n'est pas correct
        mailError.textContent = "Le format du mail doit être: prénom.nom@laplateforme.io"
    } else {
        // Effacer le message d'erreur s'il y en a un
        mailError.textContent = '';
    }
});
}


//FONCTION POUR SOUMETTRE LE FORMULAIRE
function submitForm() {
    document.addEventListener('DOMContentLoaded', function() {
      const form = document.getElementById('registrationForm');
      form.addEventListener('submit', function(event) {
        event.preventDefault();
  
        let formIsValid = true;
  
        // Vérifier si l'adresse e-mail est valide
        checkEmail();
        if (document.getElementById('mailError').textContent !== '') {
          formIsValid = false;
        }
  
        // Vérifier si le mot de passe est valide et correspond à la confirmation
        checkPassword();
        if (document.getElementById('passwordError').textContent !== '' || document.getElementById('passwordConfirmError').textContent !== '') {
          formIsValid = false;
        }
  
        if (formIsValid) {
          const email = document.getElementById('mail').value;
          const password = document.getElementById('mdp').value;
          fetchUserData(email, password);
        }
      });
    });
  }

// FONCTION FETCH POUR RECUP JSON
function fetchUserData(email,password) {
    fetch('utilisateur.json')
    .then(response => response.json())
        .then(data => {
            const user = data.utilisateurs.find(user => user.email === email)

            if (user) {
                // Vérification du rôle et redirection
                if (user.role === "étudiant") {
                    window.location.href = "../bigjob/calendrier.html";
                } else if (user.role === "moderateur") {
                    window.location.href = "../bigjob/liste_demandes_presences.html";
                } else if (user.role === "administrateur") {
                    window.location.href = "../bigjob/administration.html";
                } else {
                    alert("Rôle non reconnu");
                }
            } else {
                alert('Adresse email incorrecte');
            }
        })
        .catch(error => console.error(error));
    }            

            







// ------- SCRIPT

checkPassword();
checkEmail();
submitForm();