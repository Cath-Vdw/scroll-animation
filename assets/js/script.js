// Sélectionne tous les éléments avec la classe .box
const boxes = document.querySelectorAll(".box");

// Ajoute un écouteur d’événement sur le défilement de la page (scroll)
window.addEventListener("scroll", checkBoxes);

// Appelle la fonction une première fois au chargement de la page,
// pour gérer les boîtes déjà visibles sans attendre un scroll
checkBoxes();

// Fonction qui vérifie la position de chaque boîte par rapport à la fenêtre
function checkBoxes() {
  // Définit le point d'apparition : ici à 4/5 (80%) de la hauteur de la fenêtre
  const triggerBottom = (window.innerHeight / 5) * 4;

  // Point de départ pour retirer la classe si on remonte trop (optionnel)
  const triggerTop = window.innerHeight / 2; // pas utilisé directement ici

  // Passe en revue toutes les boîtes sélectionnées
  boxes.forEach((box) => {
    // Récupère la distance entre le haut de la boîte et le haut de la fenêtre
    const boxTop = box.getBoundingClientRect().top;

    // Vérifie si la boîte est dans la zone visible à l’écran
    // Condition : le haut de la boîte est sous triggerBottom et au-dessus du bas de l’écran
    if (boxTop < triggerBottom && boxTop > -box.offsetHeight) {
      box.classList.add("show"); // Fait apparaître la boîte avec la classe CSS .show
    } else {
      box.classList.remove("show"); // La retire lorsqu’elle sort de la zone visible
    }
  });
}
