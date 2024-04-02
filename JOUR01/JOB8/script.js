// déjà définir un nb premier  : ne peux être divisé que par lui même ou par un 
function sommeNombresPremiers(nombre1, nombre2) {
    function estPremier(nombre) {
        for (let i = 2, s = Math.sqrt(nombre); i <= s; i++)
            if (nombre % i === 0) return false;
        return nombre > 1;
    }

    if (estPremier(nombre1) && estPremier(nombre2)) {
        return nombre1 + nombre2;
    } else {
        return false;
    }
}

console.log(sommeNombresPremiers(3, 5));
console.log(sommeNombresPremiers(4, 5));