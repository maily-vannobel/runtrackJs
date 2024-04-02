// Créer fonction qui récup contenu de l'élément d'ID'citation'


function citation() {

    //variable citationElem qui stock le contenu duhtml dans variable
    const citationElement = document.getElementById("citation");
    if (citationElement) {
// créer variable qui recup le contenu du texte de la var citationElem
        const citationText = citationElement.textContent;
        console.log(citationText);
    
    }
}

// ajouter evenement de clic au bouton
document.getElementById("button").addEventListener("click", citation);
