//création de fonction afficherJoursSemaines()
// création de la variable const; sa valeur= array (tableau) avec les jours

function afficherJoursSemaines() {
    const joursSemaines = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
    
 // BOUCLE FOR - initalise compteur 'i' à 0
// tant que 'i' + petit que le tableau: a chaque itération, l'élément du tableau à l'index i est affiché
//i++ incrémente de 1
    for (let i = 0; i < joursSemaines.length; i++)
     {
        console.log(joursSemaines[i]);
     }
}

// appel de afficherjoursemaines
afficherJoursSemaines();