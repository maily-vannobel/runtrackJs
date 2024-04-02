//création fonction pour définir si année est  bissextile ou pas //


//bissextile =366 jours. pour vérifier : l'année est divisible par 4 et non divisible par 100 ou si année divisible par 400 //
// '&&' = ET  

function bisextile(annee) {
    if ((annee % 4 === 0 && annee % 100 !== 0) || annee % 400 === 0) {
        return true;
    } else 
    {
        return false; 
    }
}



const annee = 2024;
console.log(`L'année ${annee} est bissextile : ${bisextile(annee)}`);
