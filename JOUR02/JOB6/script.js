// CODE KONAMI (haut bas haut)
const konamiCode =["ArrowUp","ArrowDown",'ArrowUp']

//initialiser index
let konamiIndex = 0;

//ajouter evenement keydown
document.addEventListener('keydown', function(event) {
    // SI la touche pressée est correcte,incrémenter index
    if (event.code === konamiCode[konamiIndex]) {
        konamiIndex++;
        // si l'entrée est identique au code
        if (konamiIndex === konamiCode.length) {
           // ajoute la classe 'stylePlateforme'
            document.body.classList.add('stylePlateforme');

            // Réinitialise l'index pour permettre à l'utilisateur d'entrer à nouveau la séquence
            konamiIndex = 0;
        }
    } else {
        // Réinitialise l'index si la touche pressée ne correspond pas à la prochaine touche de la séquence Konami
        konamiIndex = 0;
    }
});