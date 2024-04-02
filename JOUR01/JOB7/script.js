function jourTravaille(date) {
    // variable qui stocke jours feriés
    const joursFeries = [
        "2024-01-01", 
        "2024-05-01", 
        "2024-11-11", 
        "2024-07-14", 
        "2024-12-25", 
    ];

    // Formater la date en chaîne de caractères au format ISO (YYYY-MM-DD)
    let dateFormattee = date.toISOString().split("T")[0];

    // Options pour formater la date pour l'affichage
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    };

    // Formater la date pour l'affichage en utilisant la localisation française
    let dateString = new Intl.DateTimeFormat("fr-FR", options).format(date);

    // Vérifier si la date correspond à un jour férié
    if (joursFeries.includes(dateFormattee)) {
        console.log(`Le ${dateString} est un jour férié.`);
    } 
    // verif si c'est un weekend
    else if (date.getDay() === 0 || date.getDay() === 6) {
        console.log(`Le ${dateString} est un week-end`);
    } 
    else {
        console.log(`Le ${dateString} est un jour ouvré.`);
    }
}

jourTravaille(new Date("2024-09-13")); 
jourTravaille(new Date("2024-06-09")); 
jourTravaille(new Date("2024-06-25")); 
jourTravaille(new Date("2024-04-07"));
jourTravaille(new Date("2024-05-01")); 




