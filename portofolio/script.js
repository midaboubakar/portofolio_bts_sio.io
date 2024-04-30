function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    menu.classList.toggle("open");
    icon.classList.toggle("open");


}
  // Fonction pour changer la couleur du bouton Envoyer
  function changeButtonColor(color) {
    document.getElementById("submitButton").style.backgroundColor = color;
  }

  // Événement pour changer la couleur du bouton lorsque la souris survole le formulaire
  document.getElementById("contactForm").addEventListener("mouseover", function() {
    changeButtonColor("#ff9800"); // Change la couleur du bouton lors du survol
  });

  // Événement pour restaurer la couleur du bouton lorsque la souris quitte le formulaire
  document.getElementById("contactForm").addEventListener("mouseleave", function() {
    changeButtonColor("#4caf50"); // Restaure la couleur d'origine du bouton
  });
