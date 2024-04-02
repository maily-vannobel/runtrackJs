
function jsonValueKey(json, key){
    const objetJson = JSON.parse(json); // convertit chaine Json en objet JS

    if (key in objetJson) {
        return(objetJson[key]);
    } // si la clé existe elle est retournée
    else {
        return("Clé invalide");
    }
}

const donneesJson = '{"name": "LaPlateforme", "address": "8 rue d\'Hozier", "city": "Marseille", "nb_staff": "11", "creation": "2019"}';
const valeur = jsonValueKey(donneesJson, "city");
console.log(valeur);