//Fonction:'accueil'(barnav) redirige vers laplateforme
// JQUERY

$(document).ready(function() {
    // Lorsque le lien Accueil est cliqué
    $("a.nav-link[href='index.html']").click(function(event) {
      event.preventDefault();
      window.location.href = "https://www.laplateforme.io/";
    });
  });