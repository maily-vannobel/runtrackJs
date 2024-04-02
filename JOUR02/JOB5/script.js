// Sélection du footer
const footer = document.querySelector("footer");

function majCouleur() {
    const scrollHeight = document.body.scrollHeight;
    const innerHeight = window.innerHeight;
    const scrollTop = window.scrollY;

// scrollHeight:hauteur totale de la page, (dont partie non visible)
// scrollTop: nb de défilement vertical effectué à l'intérieur de l'élément.

//calculer %
    const scrollPercentage = (scrollTop / (scrollHeight - innerHeight)) * 100;

    footer.style.backgroundColor = `hsl(${scrollPercentage}, 40%, 60%)`;
}

// Ajout événement qui appelle fonction majCouleur() qd scroll
window.addEventListener("scroll", majCouleur);
